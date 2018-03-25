import React, { Component } from "react";

class CharacterBox extends Component {
    handleClick = () => {
        this.props.changeCharacter(this.props.character);
    }

    render = () => {
        return (
            <div className="characterBox" onClick={this.handleClick}>
                <div className="characterBox__main">
                    <h3 className="characterBox__label u-margin-bottom-smallest">{this.props.character}</h3>
                </div>
                <div className="characterBox__info">
                    <p>{this.props.translation}</p>
                </div>
            </div>
        );
    }
}

export default CharacterBox;