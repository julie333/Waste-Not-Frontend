import React, {Component} from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import {RaisedButton} from 'material-ui';
//DropDown
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import { addProduct } from '../../store/actions.js'
import DatePicker from 'material-ui/DatePicker';

const styles={
  errorStyle: {
    marginLeft: 12,
    color: orange500,
  },
  underlineStyle: {
    marginLeft: 12,
    borderColor: orange500,
  },
  floatingLabelStyle: {
    marginLeft: 12,
    color: 'dark-blue',
  },
  floatingLabelFocusStyle: {
    marginLeft: 12,
    color: blue500,
  },
};

const dropDownStyles = {
  customWidth: {
    width: 300,
  },
};

class AddProductForm extends Component {
    constructor(props) {
        super(props);

}

    submitNewProductData = (product) => {
        product.prproductDefault();
        const addProductAction = addProduct(this.state); //store/action.js
        console.log('this.state inside the form ', this.state);
        console.log('this.props ', this.props);
        //continue here! addProductAction is assigned a value but never use
    };


    productNameInput = (product) => {
        this.setState({
            productName:product.currentTarget.value,
        })
    };

    dateInput = (product, date) => { //product is always null, OK

        this.setState({
            date: date,
        })
    };

    timeInput = (product) => {
        this.setState({
            time:product.currentTarget.value
        })
    };

    descriptionInput = (product) => {
        this.setState({
            description:product.currentTarget.value
        })
    };

    locationInput = (product) => {
        this.setState({
            location:product.currentTarget.value
        })
    };


    openBooleanInput = (product, index, value) => {
        if(value==1) {
            this.setState(
                {open: true}
            )
        }
        if(value==2) {
            this.setState(
                {open: false}
            )
        }
    };

    render() {
        return(
            <div>
                <form onSubmit={this.submitNewProductData}>

                {/*Product Name*/}
                  <TextField
                    hintText="Enter here"
                    errorText="This field is required."
                    floatingLabelText="ProductName"
                    hintStyle={styles.errorStyle}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    onChange={this.productNameInput}
                  /><br />

                  {/*Date*/}
                  <DatePicker hintText="Enter Product Date" container="inline" onChange={this.dateInput}/>

                  {/*Time*/}
                  <TextField
                    hintText="Enter here"
                    errorText="This field is required."
                    floatingLabelText="Time"
                    hintStyle={styles.errorStyle}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    onChange={this.timeInput}
                  /><br />

                  {/*Description*/}
                  <TextField
                    hintText="Enter here"
                    floatingLabelText="Description"
                    errorStyle={styles.errorStyle}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    onChange={this.descriptionInput}
                  /><br />

                  {/*Location*/}
                  <TextField
                    hintText="Enter here"
                    errorText="This field is required."
                    floatingLabelText="Location"
                    floatingLabelStyle={styles.floatingLabelStyle}
                  /><br />

                  {/*Open / closed (boolean)*/}
            

                  {/*SUBMIT BUTTON*/}
                  <RaisedButton label="Submit (Add Product)" type="submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(AddProductForm);


    /*  <DropDownMenu value={this.state.value} onChange={this.openBooleanInput} style={dropDownStyles}>
                    <MenuItem value={1} primaryText="open"  label="Open Product?"/>
                    <MenuItem value={2} primaryText="private"  label="Open Product?" />
                  </DropDownMenu>*/ 