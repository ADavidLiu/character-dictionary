import React, {Component} from 'react';

import Layout from "./components/layout";

class App extends Component {
    state = {
        character: "学"
    }

    changeCharacter = (newCharacter) => {
        this.setState({character: newCharacter});
    }

    render() {
        return (
            <div className="App">
                <Layout character={this.state.character}></Layout>
            </div>
        );
    }
}

export default App;
