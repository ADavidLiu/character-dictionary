import React from "react";

import CharacterDisplayer from "./characterDisplayer";
import CharacterInfo from "./characterInfo";
import Search from "./search";

const Layout = (props) => {
    return (
        <main className="sectionMain">
            <section className="sectionMain__character">
                <CharacterDisplayer character={props.character}></CharacterDisplayer>
                <CharacterInfo character={props.character}></CharacterInfo>
            </section>
            <aside className="sectionMain__search">
                <Search changeCharacter={props.changeCharacter}></Search>
            </aside>
        </main>
    );
}

export default Layout;