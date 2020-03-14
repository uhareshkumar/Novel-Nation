import React from 'react';
import ReactDOM from 'react-dom';
import Launch from './launch/launch'

class App extends React.Component {
    render() {
        return(
            <Launch />
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));