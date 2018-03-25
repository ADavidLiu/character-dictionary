import React, { Component, Fragment } from "react";

import SearchResults from "./searchResults";
import Searchbar from "./searchbar";

class Search extends Component {
    state = {
        term: ""
    }

    search = (e) => {
        this.setState({
            term: e.target.value
        });
    }

    componentDidMount = () => {

    }

    render = () => {
        return (
            <Fragment>
                <Searchbar search={this.search} term={this.state.term}></Searchbar>
                <SearchResults changeCharacter={this.props.changeCharacter}></SearchResults>
            </Fragment>
        );
    }
}

export default Search;