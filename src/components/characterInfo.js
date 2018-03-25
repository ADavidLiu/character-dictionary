import React from "react";

const CharacterInfo = (props) => {
    return (
        <div className="characterInfo">
            <div className="characterInfo__group characterInfo__group--main">
                <div className="characterInfo__data">
                    <h3 className="u-color-white u-margin-bottom-smallest">Original</h3>
                    <p className="u-color-white">{props.original}</p>
                </div>
                <div className="characterInfo__data">
                    <h3 className="u-color-white u-margin-bottom-smallest">Pinyin</h3>
                    <p className="u-color-white">{props.pinyin}</p>
                </div>
                <div className="characterInfo__data">
                    <h3 className="u-color-white u-margin-bottom-smallest">Type</h3>
                    <p className="u-color-white">{props.type}</p>
                </div>
            </div>
            <div className="characterInfo__group">
                <h2 className="u-color-white u-margin-bottom-small characterInfo__title">Translation</h2>
                <p className="u-color-white">{props.translation}</p>
            </div>
            <div className="characterInfo__group">
                <h2 className="u-color-white u-margin-bottom-small characterInfo__title">Definition</h2>
                <p className="u-color-white">{props.definition}</p>
            </div>
        </div>
    );
}

export default CharacterInfo;