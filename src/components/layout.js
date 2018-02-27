import React, {Component} from "react";

import CharacterDisplayer from "./characterDisplayer";

class Layout extends Component {
    render() {
        return (
            <main className="sectionMain">
                <div className="sectionMain__character">
                    <CharacterDisplayer character={this.props.character}></CharacterDisplayer>
                    
                </div>
                <div className="sectionMain__search"></div>
            </main>
        );
    }
}

export default Layout;