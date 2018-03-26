import React, {Component} from "react";

import HanziWriter from "hanzi-writer";

class CharacterDisplayer extends Component {
    state = {
        speechKey: "faefb5118b654670a0919a54ebb1bcbe"
    }

    constructor() {
        super();
        let writer;
    }

    write = (newCharacter) => {
        this.writer.setCharacter(newCharacter);
        this.trace();
    }

    trace = () => {
        this.writer.animateCharacter();
    }

    pronounce = () => {
        window.VoiceRSS.speech({
            key: this.state.speechKey,
            src: this.props.character,
            hl: 'zh-cn',
            r: 0, 
            c: 'mp3',
            f: '44khz_16bit_stereo',
            ssml: false
        });
    }

    componentDidMount() {
        console.log(document.querySelector(".characterDisplayer").style.width);
        this.writer = new HanziWriter("characterDisplayer__zone", this.props.character, {
            padding: 0,
            showOutline: true,
            strokeAnimationSpeed: 1,
            delayBetweenStrokes: 10,
            strokeColor: "#ff895d"
        });
        this.trace();
    }

    componentWillReceiveProps(newProps) {
        if (this.props !== newProps) {
            this.write(newProps.character);
        }
    }

    render = () => {
        return (
            <div className="characterDisplayer">
                <div className="characterDisplayer__zone" id="characterDisplayer__zone"></div>
                <div className="characterDisplayer__controls">
                    <button className="characterDisplayer__btn" onClick={this.trace}><i className="fas fa-redo-alt characterDisplayer__btn-icon"></i></button>
                    <button className="characterDisplayer__btn" onClick={this.pronounce}><i className="fas fa-play characterDisplayer__btn-icon"></i></button>
                </div>
            </div>
        );
    }
}

export default CharacterDisplayer;