import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import { formBox, usersFormStyle, usersFormTitle,buttonStyle } from './constants.js';
import TextField from 'material-ui/TextField';
import { blue500 } from 'material-ui/styles/colors';
import { RaisedButton } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';
import { style } from './constants.js';
import { register } from '../../store/actions.js'
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';


class RegisterForm extends Component {

    constructor(props) {
        super(props);
    }


    submitNewUserData = (user) => {
        event.preventDefault();
        const addUserAction = register(this.state);
        console.log('this.state inside the form ', this.state);
        console.log('this.props ', this.props);

    };


    firstNameInput = (event) => {
        this.setState({
            firstName: event.currentTarget.value,
        })

    };

    lastNameInput = (event) => {
        this.setState({
            lastName: event.currentTarget.value,
        })

    };

    emailInput = (event) => {
        this.setState({
            email: event.currentTarget.value,
        })

    };

    usernameInput = (event) => {
        this.setState({
            username: event.currentTarget.value,
        })

    };

    usernameInput = (event) => {
        this.setState({
            username: event.currentTarget.value,
        })

    };

    locationInput = (event) => {
        this.setState({
            location: event.currentTarget.value,
        })

    };


    render() {
        return (
            <div>
                <div style={usersFormTitle} className="App-header">
                    <h2>Add New User</h2>
                </div>
                <div style={formBox}>
                    <Paper style={usersFormStyle} zDepth={3}>

                            <form  style={style}  onSubmit={this.submitNewUserData}>
                            
                                {/*firstName*/}
                                  <TextField  style={style} 
                                    hintText="First Name"
                                    floatingLabelText="First Name"
                                    onChange={this.firstNameInput}
                                    underlineShow={false}
                                  />
                                  <Divider />

                                {/*lastName*/}
                                  <TextField  style={style} 
                                    hintText="Last Name"
                                    floatingLabelText="Last Name"
                                    onChange={this.lastNameInput}
                                    underlineShow={false}
                                  />
                                  <Divider />

                                  {/*email*/}
                                  <TextField  style={style} 
                                    hintText="Email"
                                    floatingLabelText="Email"
                                    onChange={this.emailInput}
                                    underlineShow={false}
                                  />
                                  <Divider />


                                  {/*username*/}
                                  <TextField  style={style} 
                                    hintText="Username"
                                    floatingLabelText="Pick a username"
                                    onChange={this.usernameInput}
                                    underlineShow={false}
                                  />
                                  <Divider />

                                   {/*password*/}
                                  <TextField  style={style} 
                                    hintText="Pick a password"
                                    floatingLabelText="Password"
                                    onChange={this.passwordInput}
                                    underlineShow={false}
                                    type="password"
                                 />
                                  <Divider />

                                  {/*avatar*/}
                                  <TextField  style={style} 
                                    hintText="Avatar"
                                    floatingLabelText="Upload Avatar"
                                    onChange={this.avatarInput}
                                   underlineShow={false}
                                  />
                                  <Divider />

                                {/*location*/}
                                  <TextField  style={style} 
                                    hintText="Location"
                                    floatingLabelText="Location"
                                    onChange={this.locationInput}
                                    underlineShow={false}
                                  />
                                  <Divider />
                                  
                               <FlatButton style={buttonStyle} backgroundColor="#A2AB58" 
                                           hoverColor='#67BCDB' label="Sign Up" 
                                           onClick={this.submitNewUserData}/>
                            </form>
                        </Paper>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(RegisterForm);
