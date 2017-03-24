import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { connect } from 'react-redux';
import ToggleButton from '../ToggleButton';
import { fetchDataByProduct } from '../../store/actions.js'
import IconButton from 'material-ui/IconButton';
import CommunicationChatBubbleOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import ActionBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import ActionDone from 'material-ui/svg-icons/action/done';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import DeviceAccessTime from 'material-ui/svg-icons/device/access-time';
import { style, buttonStyle, containerStyle, imgStyle} from './constants.js';

class ProductId extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };

     var productId = Object.keys(this.props.params.productId).length > 0 ? this.props.params.productId : [];
     const fetchAction = fetchDataByProduct(productId);
      
     this.props.dispatch(fetchAction)
            .then(() => {
                console.log("After Fetch",this.props)
            });
    }
  
    requestItem = () => {
        // Add To the owners notifications
    }

    addToList = () => {
        // Add To the current users list
    }

    render() {
        console.log("Before", this.props.products)
          var productToRender = Object.keys(this.props.products).length > 0 ? this.props.products : {};
       console.log("productToRenderlength",   productToRender.length)
        return (
            <div className="ProductId" style={containerStyle}>
            {   productToRender.length>0?"False":"True" &&
                Object.keys(productToRender).length > 0 &&
            
                <Card style={style}>
                        <CardHeader
                             title={productToRender.productOwner.username}
                             avatar={productToRender.productOwner.avatar}
                             subtitle={"Posted on " + productToRender.datePosted[2]+"/"+productToRender.datePosted[1]+"/"+productToRender.datePosted[0]} />}
                        />
                        <CardMedia
                             overlay={<CardTitle  title={productToRender.productName}
                             subtitle={"Category: " + productToRender.productCategory} />}
                        >
                            <img style={imgStyle} src={productToRender.productImageUrl} alt="Avatar of the Event"/>
                        </CardMedia>
                        <CardText>
                            {<IconButton><ActionBookmarkBorder color="green" /></IconButton>}{productToRender.description} <br/>
                            {<IconButton><MapsPlace color="green" /></IconButton>}{productToRender.pickupLocation} <br/>
                            {<IconButton><DeviceAccessTime color="green" /></IconButton>} {productToRender.pickupTime} <br/>
                            {<IconButton><ActionDone color="green" /></IconButton>}{productToRender.available?"Available":"Not Available"} <br/>   
                        </CardText>                        
                        <CardActions>               
                            <FlatButton style={buttonStyle} backgroundColor="whitesmoke" hoverColor="green" label="Request Item" onClick={this.requestItem.bind(this)}/>
                            <FlatButton style={buttonStyle} backgroundColor="whitesmoke" hoverColor="green" label="Add to List" onClick={this.addToList.bind(this)}/>
                        </CardActions>
                </Card>
        }
           </div>
        )
    }
}



const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ProductId);

