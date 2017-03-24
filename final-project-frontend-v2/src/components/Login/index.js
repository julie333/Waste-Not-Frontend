import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { login } from '../../store/actions.js'
import { displayfeed } from '../../store/actions.js'


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }  


    handleLogin = (event) => {

        event.preventDefault();
        console.log(this.state)

        const loginAction = login(this.state);

        this.props.dispatch(loginAction)
            .then(()=> {
               this.setState({
                    username:'',
                    password:'',
                })
            })
            .then(() => {
                  this.props.router.push('/users/currentUser')
                })

};


    handleRegister = (event) => {

        event.preventDefault();
        console.log(this.state)

        this.props.router.push("/register");

    };

    handleUsernameChange = (event) => {

        this.setState({
            username: event.currentTarget.value
        })
    };

    handlePasswordChange = (event) => {

        this.setState({
            password: event.currentTarget.value
        })
    };

    render() {
        return (
            <div className="Login">
		<div className="Login-header">
			<h2>Never Waste another Sandwich!</h2>
		</div>
			<form onSubmit={this.handleLogin}>	<br/>
				<TextField hintText="Username" floatingLabelText="Username" 
		 			onChange={this.handleUsernameChange}/> <br/>
				<TextField hintText="Password" floatingLabelText="Password" type="password"
      	  			onChange={this.handlePasswordChange}/>	<br/><br/>
    	 		<RaisedButton label="Login" primary={true} style={ { marginRight: '20px' } }
    	 			onClick={this.handleLogin}/>
    	 		<RaisedButton label="Sign Up" primary={true} 
    	 		 	onClick={this.handleRegister}/>	 	
	  		</form>
	</div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Login);
