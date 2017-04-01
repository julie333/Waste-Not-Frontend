import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { fetchDataByProduct, fetchProductsRequestedByOthers } from '../../store/actions.js'
import IconButton from 'material-ui/IconButton';
import ActionBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import ActionDone from 'material-ui/svg-icons/action/done';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import DeviceAccessTime from 'material-ui/svg-icons/device/access-time';
import { style, buttonStyle, containerStyle, imgStyle } from './constants.js';
import Interaction from '../Interaction';
import HomeIcon from '../HomeIcon';

class ProductId extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            open: false,
        };

        var productId = Object.keys(this.props.params.productId).length > 0 ? this.props.params.productId : [];
        const fetchAction = fetchDataByProduct(productId);

        this.props.dispatch(fetchAction)
            .then(() => {
                console.log("After Fetch", this.props)
            });
    }

    requestItem = (event) => {
        event.preventDefault();

        this.setState({
            open: true,
        })

        delete this.state.open;

        const fetchAction = fetchProductsRequestedByOthers(event.currentTarget.id, this.props.currentUser.id);
        this.props.dispatch(fetchAction);
    }

    addToList = () => {


    }

    render() {
        console.log("Before", this.props.products)
        var productToRender = Object.keys(this.props.products).length > 0 ? this.props.products : {};
        return (
            <div style={{ backgroundColor:'#67BCDB', }}>
            <div className="ProductId" style={containerStyle}>
                <HomeIcon router={this.props.router}/>
              { productToRender.length>0?false:true &&
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
                            {<IconButton><ActionDone color="green" /></IconButton>}{productToRender.available?"Available":"Gone"} <br/>   
                        </CardText>                        
                        <CardActions>               
                            <FlatButton id={productToRender.id}
                                        style={buttonStyle} 
                                        backgroundColor='whitesmoke'
                                        hoverColor="#ff4081"
                                        label="Request Item" 
                                        onClick={this.requestItem.bind(this)}/>

                            <FlatButton id={productToRender.id}
                                        style={buttonStyle} 
                                        backgroundColor='whitesmoke'
                                        hoverColor="#ff4081"
                                        label="Add to List" 
                                        onClick={this.addToList.bind(this)}/>
                        </CardActions>
                </Card>
        }
            <Interaction open={this.state.open} message="Item Request Sent !"/>
            </div>
            </div>

        )
    }
}



const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ProductId);
