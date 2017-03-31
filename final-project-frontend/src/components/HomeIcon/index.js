import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions.js';
import ActionHome from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
import Logo from '../Logo';

const style = {
    marginTop: '1%',
    marginRight: '1%',
    cssFloat:'right',
}

class HomeIcon extends Component {

    constructor(props) { super(props);  this.state = { username:
    this.props.currentUser.username, password:
    this.props.currentUser.password, }; }


    handleClick = (event) => {

        event.preventDefault();
       

 console.log("In home" ,this.state );

        const loginAction = login(this.state);

        this.props.dispatch(loginAction)
            .then(() => {
                this.props.router.push('/users/currentUser')
            })

};

    render() {
        return (
            <div className="Home">
             <Logo/>
             <IconButton style={style}>
             <ActionHome color="#ff4081" onTouchTap={this.handleClick}/>
             </IconButton>  
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(HomeIcon);


