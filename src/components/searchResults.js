import React, { Component } from "react";

import CharacterBox from "./characterBox";

class SearchResults extends Component {
    state = {
        results: [
            {
                character: "国",
                translation: "Country"
            },
            {
                character: "大",
                translation: "Big"
            }
        ]
    }

    render = () => {
        const resultsList = this.state.results.map(result =>
            <CharacterBox key={`${result.character}_${result.translation}`} character={result.character} translation={result.translation} changeCharacter={this.props.changeCharacter}></CharacterBox>
        );

        return (
            <div className="searchResults">
                {resultsList}
            </div>
        );
    }
}

export default SearchResults;