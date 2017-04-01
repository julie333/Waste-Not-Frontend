import React, { Component } from 'react';
import { connect } from 'react-redux';

const style = {
    width: '100%',
    height: 1000,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: "#222",
}


class App extends Component {

    render() {
        return (
            <div className="App" style={style}>	
                <img src="./logo.png" alt="logo"/>
                <img src="./logo.png" alt="logo"/>
                <img src="./logo.png" alt="logo"/>
                <img src="./logo.png" alt="logo"/>
                <img src="./logo.png" alt="logo"/>
                <img src="./logo.png" alt="logo"/>
                <img src="./logo.png" alt="logo"/>
                <img src="./logo.png" alt="logo"/>
                <img src="./logo.png" alt="logo"/>
                <img src="./logo.png" alt="logo"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(App);
