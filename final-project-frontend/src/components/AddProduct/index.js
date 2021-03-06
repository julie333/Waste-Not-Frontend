import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import { formBox, productsFormStyle, productsFormTitle, style, dropdownStyle, imageStyle, buttonStyle } from './constants.js';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';
import { addProduct, addProductToGroup } from '../../store/actions.js'
import DatePicker from 'material-ui/DatePicker';
import ImageUpload from '../ImageUpload';
import Interaction from '../Interaction';
import HomeIcon from '../HomeIcon';


class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueCategory: 0,
            valueAvailability: 0,
            open: false,
            group: 0,
        };


    }

    submitNewProductData = () => {

        this.setState({
            open: true,

        })

        event.preventDefault();
        delete this.state.open;
        delete this.state.valueCategory;
        delete this.state.valueAvailability;
        delete this.state.group;
        var userId = this.props.currentUser.id;
        const addProductAction = addProduct(this.state, userId);
        this.props.dispatch(addProductAction);
        console.log('this.state inside the form ', this.state);
        console.log('this.props ', this.props);
    };

    submitNewProductDataToGroup = () => {

        this.setState({
            open: true,

        })

        event.preventDefault();
        var userId = this.props.currentUser.id;
        var groupId = this.state.group;
        delete this.state.open;
        delete this.state.valueCategory;
        delete this.state.valueAvailability;
        delete this.state.group;
        const addProductGroupAction = addProductToGroup(this.state, userId, groupId);
        this.props.dispatch(addProductGroupAction);
        console.log('this.state inside the form ', this.state);
        console.log('this.props ', this.props);
    };


    productNameInput = (event) => {
        this.setState({
            productName: event.currentTarget.value

        })

    };

    groupInput = (event, index, value) => {
        this.setState({
            group: value,
        })
        console.log(value)
    }


    productCategoryInput = (event, index, value) => {
        this.setState({
            valueCategory: value,
            productCategory: value
        })
        console.log(value)
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

    imageUrlInput = (productImageUrl) => {
        this.setState({
            productImageUrl: productImageUrl,
        })
        console.log("Success", productImageUrl)
    };

    pickupLocationInput = (event) => {
        this.setState({
            pickupLocation: event.currentTarget.value
        })
    };

    // locationInput = (event) => {
    //     this.setState({
    //         location: event.currentTarget.value
    //     })
    // };

    pickupTimeInput = (event, time) => {
        this.setState({
            pickupTime: time.getHours() + ":" + time.getMinutes()
        })
    };


    availableInput = (event, index, value) => {

        this.setState({ valueAvailability: value })

        if (value === 1) {
            this.setState({ available: true })
        }
        if (value === 2) {
            this.setState({ available: false })
        }
    };

    render() {


        return (
            <div>   
             <div  style={productsFormTitle}>
                       <HomeIcon router={this.props.router}/> 
                       <h2>Post New Item</h2>
                </div>
                <div style={formBox}>
                    <Paper style={productsFormStyle} zDepth={5}>

                            <form  style={style}  onSubmit={this.submitNewProductData}>
                            
                                {/*Item Name*/}
                                  <TextField  style={style} 
                                    hintText="Item Name"
                                    floatingLabelText="Item Name"
                                    onChange={this.productNameInput}
                                  /><br />

                               {/*productCategory */}
                                <div style={dropdownStyle} >
                                <DropDownMenu value={this.state.valueCategory} onChange={this.productCategoryInput}>
                                    <MenuItem value={0} primaryText="Select Item Category" />
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
                                  </div>

                                  {/*Date*/}
                                  <div style={style} >
                                  <DatePicker   
                                  hintText="Date Posted" 
                                  container="inline" 
                                  autoOk={true}
                                  onChange={this.dateInput}/>
                                  </div>

                                 {/*Description*/}
                                  <TextField  style={style} 
                                    hintText="Short Description"
                                    floatingLabelText="Description"
                                    onChange={this.descriptionInput}
                                  />


                                  {/*Time*/}
                                  <div style={style} >
                                  <TimePicker 
                                    hintText="Pickup time"
                                    autoOk={true}
                                    format="24hr"
                                    onChange={this.pickupTimeInput}/>
                                  </div>

                                  {/*Location*/}
                                  <TextField  style={style} 
                                    hintText="Where to pick up item?"
                                    floatingLabelText="Location"
                                    onChange={this.pickupLocationInput}
                                  /><br />

                                  {/*Image*/}
                                  <p  style={style} >Upload Image of Item</p>
                                  {console.log(this.props)}
                                  <div style={imageStyle} >
                                  <ImageUpload 
                                  imageUrlInput={this.imageUrlInput}
                                  />
                                  </div>           

                                {/*available*/}
                                <div style={dropdownStyle} >
                                <DropDownMenu value={this.state.valueAvailability} onChange={this.availableInput}>
                                    <MenuItem value={0} primaryText="Select Item Availability" />
                                    <MenuItem value={1} primaryText="Available" />
                                    <MenuItem value={2} primaryText="Unavailable"/>
                                  </DropDownMenu>

                                  </div>

                                {/*group input*/ console.log(this.props.currentUser)}
                                { Object.keys(this.props.currentUser).length > 0 &&
                                  <div style={dropdownStyle} >
                                  <DropDownMenu value={this.state.group} onChange={this.groupInput}>
                                  <MenuItem value={0} primaryText="Select if you want to post it only to a Group" />
                                    { this.props.currentUser.groups.map((group) => (
                                       <MenuItem value={group.id} primaryText={group.groupName} />
                                    ))}
                                  </DropDownMenu>
                                  </div> 
                                }  

                               <FlatButton style={buttonStyle} backgroundColor='#67BCDB'
                                           hoverColor="#ff4081" label="Post Item" 
                                           onClick={this.submitNewProductData}/>

                                <FlatButton style={buttonStyle} backgroundColor='#67BCDB'
                                           hoverColor="#ff4081" label="Post To Group" 
                                           onClick={this.submitNewProductDataToGroup}/>
                                <Interaction open={this.state.open} message="Item Posted..Thanks for sharing !"/>
                            </form>
                        </Paper>
                        <br/><br/>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(AddProduct);

// {/*Location*/}
// <TextField  style={style} 
//   hintText="choose location on map"
//   floatingLabelText="Location on Map"
//   onChange={this.locationInput}
// /><br />
