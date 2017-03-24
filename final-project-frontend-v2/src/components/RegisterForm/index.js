import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';


const style = {
    height: '50vh',
    width: '95%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class RegisterForm extends Component {

        constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            street: '',
            streetNb: 0,
            postCode: '',
            city: '',
            country: '',
            // latitude: '',
            // longitude: '',
            email: '',
            password: ''
        }
    }


    render () {
        console.log('in the register form');
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Hey there! What would you like to share?</h2>
                </div>
                    <Paper style={style} zDepth={3}>
                        <List>
                            <ListItem primaryText="my text" />
                            <ListItem primaryText="my text" />
                            <ListItem primaryText="my text" />
                            <ListItem primaryText="my text" />
                        </List>
                    </Paper>
                </div>
            );
    }
}

export default RegisterForm;

