import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import { formBox, usersFormStyle, usersFormTitle, buttonStyle, imageStyle, styleReturn, style } from './constants.js';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { register } from '../../store/actions.js'
import Divider from 'material-ui/Divider';
import ImageUpload from '../ImageUpload';
import Interaction from '../Interaction';
import ActionHome from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
import Logo from '../Logo';


class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }


    submitNewUserData = (user) => {
        event.preventDefault();

        this.setState({
            open: true,
        })
        delete this.state.open;
        const addUserAction = register(this.state);
        this.props.dispatch(addUserAction);
        console.log('this.state inside the form ', this.state);
        console.log('this.props ', this.props);

    };

    handleClick = () => {
        this.props.router.push('/login')
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

    passwordInput = (event) => {
        this.setState({
            password: event.currentTarget.value,
        })

    };

    cityInput = (event) => {
        this.setState({
            location: event.currentTarget.value,
        })

    };

    countryInput = (event) => {
        this.setState({
            location: event.currentTarget.value,
        })

    };

    imageUrlInput = (avatar) => {
        this.setState({
            avatar: avatar,
        })
        console.log("Success", avatar)
    };

    render() {
        return (
            <div>
                <div style={usersFormTitle}>
                      <Logo/>
                        <IconButton style={styleReturn}>
                           <ActionHome color="#ff4081" onTouchTap={this.handleClick}/>
                        </IconButton>  
                    <h2>Sign Up</h2>
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


                                  {/*Avatar*/}
                                  <p  style={style} >Upload Your Avatar</p>
                                  {console.log(this.props)}
                                  <div style={imageStyle} >
                                  <ImageUpload 
                                  imageUrlInput={this.imageUrlInput}
                                  />
                                  </div>
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
 
                               <FlatButton style={buttonStyle}  backgroundColor='#67BCDB'
                                           hoverColor="#ff4081" label="Sign Up" 
                                           onClick={this.submitNewUserData}/>
                               <Interaction open={this.state.open} message="You have signed up!"/>
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

// {/*city*/}
//   <TextField  style={style} 
//     hintText="City"
//     floatingLabelText="City"
//     onChange={this.countryInput}
//     underlineShow={false}
//   />
//   <Divider />

//  {/*country*/}
//   <TextField  style={style} 
//     hintText="Country"
//     floatingLabelText="Country"
//     onChange={this.cityInput}
//     underlineShow={false}
//   />
//   <Divider />
