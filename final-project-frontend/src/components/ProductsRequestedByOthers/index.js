import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Products';

const style = {
    fontFamily: 'Nunito',
    fontWeight :'bold',
    fontSize: 40,
    width: '90%',
    color: '#ffd900',
    backgroundColor:'#43403d',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
};

class ProductsRequestedByOthers extends Component {

    constructor(props) {
        super(props);

    }
    render() {
          var products = Object.keys(this.props.currentUser).length > 0 ? this.props.currentUser.productsRequestedByOthers : [];
        
        return (
            <div className="ProductsRequestedByOthers" style={style}>
            <h2>Your Products have been requested !</h2>
              <Products productsToRender={ products }
              router={this.props.router}/> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ProductsRequestedByOthers);



