import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';

import AddProductsForm from '../AddProductsForm';

const ProductsFormTitle = {

}

const ProductsFormStyle = {
    height: '80vh',
    width: '80%',
}

const FormBox = {
    display: 'flex',
    justifyContent: 'space-around',
}


class AddProduct extends Component {

    render () {
        return (
            <div>
                <div style={ProductsFormTitle} className="App-header">
                    <h2>Add New Product</h2>
                </div>
                <div style={FormBox}>
                    <Paper style={ProductsFormStyle} zDepth={3}>
                        <AddProductsForm/>
                    </Paper>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(AddProduct);

