import React, { Component, Fragment } from "react";

import CharacterBox from "./characterBox";

import axios from "axios";

class Search extends Component {
    state = {
        term: "",
        results: [
            /* {
                character: "国",
                translation: "Country"
            },
            {
                character: "大",
                translation: "Large"
            },
            {
                character: "兵",
                translation: "Soldier"
            } */
        ]
    }

    constructor() {
        super();
        this.keys = {
            translation: "trnsl.1.1.20170321T235648Z.3193900a2fbf206f.5f78e83dd4de5da554f974b1976faff175639c28",
            dictionary: "dict.1.1.20180325T191556Z.d935f63eb89e8e43.76fd727b52f9ee6b654647fc7c5ac49a89b01ec4"
        };
    }

    search = (e) => {
        let searchTerm = e.target.value;
        let resultsList = [];
        this.setState({
            term: searchTerm
        }, () => {
            if (this.state.term !== "") {
                axios.get(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${this.keys.dictionary}&lang=en-en&text=${this.state.term}`).then(res => {
                    const defs = res.data.def[0].tr;
                    defs.map(def => {
                        axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.keys.translation}&text=${def.text}&lang=en-zh`).then(res => {
                            const character = res.data.text[0];
                            resultsList.push({
                                character: character,
                                translation: def.text
                            });
                            this.setState({
                                results: resultsList
                            });
                        }).catch(err => { console.log(err); });
                    });
                }).catch(err => { console.log(err) });
            }
        });
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        const resultsList = this.state.results.map(result =>
            <CharacterBox key={`${result.character}_${result.translation}`} character={result.character} translation={result.translation} changeCharacter={this.props.changeCharacter}></CharacterBox>
        );

        return (
            <Fragment>
                <div className="searchbar">
                    <input type="text" className="searchbar__input" placeholder="Type any word in english..." onChange={this.search} value={this.state.term}/>
                </div>
                <div className="searchResults">
                    {resultsList}
                </div>
            </Fragment>
        );
    }
}

export default Search;