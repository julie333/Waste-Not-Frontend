import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class AddGroup extends Component {

    constructor(props) {
        super(props);

    }

    render() {
          console.log('this.props ',this.props)
        return (
            <div className="AddGroup">
                <h3>{ this.props.currentUser.username }</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(AddGroup);



