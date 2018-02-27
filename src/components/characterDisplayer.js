import React, {Component} from "react";

class CharacterDisplayer extends Component {
    render() {
        return (
            <div className="characterDisplayer">
                <h1 className="characterDisplayer__label">{this.props.character}</h1>
                <div className="characterDisplayer__controls">
                    <button className="characterDisplayer__btn"><i className="fas fa-redo-alt characterDisplayer__btn-icon"></i></button>
                    <button className="characterDisplayer__btn"><i className="fas fa-play characterDisplayer__btn-icon"></i></button>
                </div>
            </div>
        );
    }
}

export default CharacterDisplayer;