import React, { Component } from "react";

import axios from "axios";
import pinyin from "pinyin";

class CharacterInfo extends Component {
    state = {
        translation: "",
        pinyin: "",
        definition: ""
    }

    constructor() {
        super();
        this.keys = {
            translation: "trnsl.1.1.20170321T235648Z.3193900a2fbf206f.5f78e83dd4de5da554f974b1976faff175639c28",
            dictionary: "dict.1.1.20180325T191556Z.d935f63eb89e8e43.76fd727b52f9ee6b654647fc7c5ac49a89b01ec4"
        }
    }

    translate = (character) => {
        axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.keys.translation}&text=${character}&lang=zh-en`).then(res => {
            this.setState({
                translation: res.data.text[0],
                pinyin: pinyin(character)
            });
            this.define();
        }).catch(err => { console.log(err); });
    }

    define = () => {
        axios.get(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${this.keys.dictionary}&lang=en-en&text=${this.state.translation}`).then(res => {
            this.setState({
                definition: this.formatDefinition(res.data.def[0].tr)
            });
        }).catch(err => { console.log(err) });
    }

    formatDefinition = (defs) => {
        const inRangeDefs = defs.filter(def => {
            return defs.indexOf(def) < 10;
        });

        let formattedDefsString = "";
        const formattedDefs = inRangeDefs.map(def => {
            return formattedDefsString += def.text + ", ";
        });
        
        return formattedDefsString.slice(0, -2) + ".";
    }

    fillInfo = (character) => {
        this.translate(character);
    }

    componentDidMount() {
        this.fillInfo(this.props.character);
    }

    componentWillReceiveProps(newProps) {
        this.fillInfo(newProps.character);
    }

    render() {
        return (
            <div className="characterInfo">
                <div className="characterInfo__group characterInfo__group--main">
                    <div className="characterInfo__data">
                        <h3 className="u-color-white u-margin-bottom-smallest">{this.state.translation}</h3>
                        <p className="u-color-white">Translation</p>
                    </div>
                    <div className="characterInfo__data">
                        <h3 className="u-color-white u-margin-bottom-smallest">{this.state.pinyin}</h3>
                        <p className="u-color-white">Pinyin</p>
                    </div>
                </div>
                <div className="characterInfo__group">
                    <h2 className="u-color-white u-margin-bottom-small characterInfo__title">Definition</h2>
                    <p className="u-color-white characterInfo__definition">{this.state.definition}</p>
                </div>
            </div>
        );
    }
}

export default CharacterInfo;