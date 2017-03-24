import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import { formBox, productsFormStyle, productsFormTitle } from './constants.js';
import TextField from 'material-ui/TextField';
import {blue500} from 'material-ui/styles/colors';
import {RaisedButton} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';
import { style } from './constants.js';
import { addProduct } from '../../store/actions.js'
import DatePicker from 'material-ui/DatePicker';


class AddProduct extends Component {

       constructor(props) {
        super(props);
        this.state = {value: ""};
                
}

    submitNewProductData = (product) => {
        product.prproductDefault();
        const addProductAction = addProduct(this.state); 
        console.log('this.state inside the form ', this.state);
        console.log('this.props ', this.props);
      
    };


    productNameInput = (event) => {
        this.setState({
            productName: event.currentTarget.value,
        })

    };

    productCategoryInput = (event, index, value) => {
           this.setState({
            productCategory: value
          })
               console.log( value)
        }

    dateInput = (event, date) => { 
        this.setState({
            datePosted: date,
        })
    };

    descriptionInput = (event) => {
        this.setState({
            description: event.currentTarget.value
        })
    };

    productImageUrlInput = (event) => {
        this.setState({
            productImageUrl: event.currentTarget.value
        })
    };

    pickupLocationInput = (event) => {
        this.setState({
            pickupLocation: event.currentTarget.value
        })
    };

    pickupTimeInput = (event) => {
        this.setState({
            pickupTime: event.currentTarget.value
        })
    };


    availableInput = (event, index, value) => {
        if(value==1) {
            this.setState(
                {available: true}
            )
        }
        if(value==2) {
            this.setState(
                {available: false}
            )
        }
    };

    render () {
        return (
            <div>
                <div style={productsFormTitle} className="App-header">
                    <h2>Add New Product</h2>
                </div>
                <div style={formBox}>
                    <Paper style={productsFormStyle} zDepth={3}>

                            <form  style={style}  onSubmit={this.submitNewProductData}>
                            
                                {/*Item Name*/}
                                  <TextField  style={style} 
                                    hintText="item name"
                                    floatingLabelText="Item name"
                                    onChange={this.productNameInput}
                                  /><br />

                               {/*productCategory */}
                                <div style={style} >
                                <DropDownMenu value={this.state.value}  onChange={this.productCategoryInput}>
                                    <MenuItem value={"FOOD"} primaryText="FOOD" />
                                    <MenuItem value={"FURNITURE"} primaryText="FURNITURE" />
                                    <MenuItem value={"STATIONERY"} primaryText="STATIONERY" />
                                    <MenuItem value={"CLOTHES"} primaryText="CLOTHES" />
                                    <MenuItem value={"TOYS"} primaryText="TOYS" />
                                    <MenuItem value={"CHILDREN"} primaryText="CHILDREN" />
                                    <MenuItem value={"BABIES"} primaryText="BABIES" />
                                    <MenuItem value={"TOOLS"} primaryText="TOOLS" />
                                    <MenuItem value={"ELECTRONICS"} primaryText="ELECTRONICS" />
                                    <MenuItem value={"MISCELLANEOUS"} primaryText="MISCELLANEOUS"/>
                                  </DropDownMenu>
                                  </div><br />

                                  {/*Date*/}
                                  <div style={style} >
                                  <DatePicker   
                                  hintText="date posted" 
                                  container="inline" 
                                  defaultValue="Default Value"
                                  onChange={this.dateInput}/>
                                  </div>
                                  <br />

                                 {/*Description*/}
                                  <TextField  style={style} 
                                    hintText="short description"
                                    floatingLabelText="Description"
                                    onChange={this.descriptionInput}
                                  /><br />


                                  {/*Time*/}
                                  <div style={style} >
                                  <TimePicker 
                                    hintText="pickup time"
                                    container="inline" 
                                    defaultValue="Default Value"/>
                                  </div>
                                  <br />

                                  {/*Location*/}
                                  <TextField  style={style} 
                                    hintText="upload image"
                                    floatingLabelText="Location"
                                    onChange={this.descriptionInput}
                                  /><br />

                               <FlatButton style={style} backgroundColor="whitesmoke" hoverColor="green" label="Post Item" />
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

export default connect(mapStateToProps)(AddProduct);







      
             
       


