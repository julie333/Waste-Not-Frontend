import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    fontFamily: 'Nunito',
    fontSize: 15,
    marginTop: '1%',
    marginRight: '1%',
    cssFloat:'right',
}

class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }


    handleLogout = (event) => {

        event.preventDefault();
        console.log(this.state)

        this.props.router.push('/login')
    };

    render() {
        return (
            <div className="Logout">
                <RaisedButton label="Logout" secondary={true} 
                    style = {style}
                    onClick={this.handleLogout}/>     
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Logout);
