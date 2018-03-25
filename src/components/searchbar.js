import React, { Component } from "react";

class Searchbar extends Component {
    render() {
        return (
            <div className="searchbar">
                <input type="text" className="searchbar__input" placeholder="Type any word in english..." onChange={this.props.search} value={this.props.term}/>
            </div>
        );
    }
}

export default Searchbar;