import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Products'

class Searched extends Component {

    constructor(props) {
        super(props);

    }

    render() {
          var products = Object.keys(this.props.products).length > 0 ? this.props.products : [];
          console.log("products",products)
        return (
            <div className="Searched">
              <Products productsToRender={ products }/> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Searched);



