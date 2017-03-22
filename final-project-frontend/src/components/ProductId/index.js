import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class ProductId extends Component {

    constructor(props) {
        super(props);

    }

    render() {
          console.log('this.props ',this.props)
        return (
            <div className="ProductId">
                <h3>{ this.props.currentUser.username }</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ProductId);



