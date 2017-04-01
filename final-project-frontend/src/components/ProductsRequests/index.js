import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ToggleRadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import ToggleRadioButtonUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import MapsZoomOutMap from 'material-ui/svg-icons/maps/zoom-out-map';
import { root, gridList, styles, buttonStyle } from './constants.js';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
import { productRequestHandler } from '../../store/actions.js';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: '',
        };
    }

    handleZoom = (key) => {

        event.preventDefault();
        console.log("Item Id: ", key);
        this.props.router.push('/products/' + key);
    };

    sendResponse = (productId, userId) => {

        console.log(this.state.selected, productId, userId);

        const fetchAction = productRequestHandler(userId, productId, this.state.selected);
        this.props.dispatch(fetchAction)
            .then(() => {
                this.setState({
                    selected: '',
                })
            })
    }

    selectedInput = (event) => {
        this.setState({
            selected: event.currentTarget.value,
        })
    };

    requestList = (tile, listSize) => {

        var t = [];

        for (var i = 0; i < listSize; i++) {

            t.push((
                <div>
        <GridTile  onTouchTap={this.handleZoom.bind(this, tile.id)}
          key={tile.id+tile.requestList[i].username}
          title={tile.productName}
          subtitle={<span>- <b>{tile.productOwner.username}</b></span>}
          actionIcon={<IconButton><MapsZoomOutMap color="white" /></IconButton>}
        > 
        <img src={tile.productImageUrl} alt="product" />
        </GridTile>
          <p style={{color:'black', fontSize:12,}}>Product Requested by : {tile.requestList[i].username} </p> 
                <form>    
                  <RadioButtonGroup name="requests"  style={styles.block} labelPosition="left" onChange={this.selectedInput}>
                    <RadioButton
                      value="Yes"
                      label="Yes"
                      checkedIcon={<ActionFavorite/>}
                      uncheckedIcon={<ActionFavoriteBorder />}
                      style={styles.radioButton}
                    />
                    <RadioButton
                      value="No"
                      label="No"
                      checkedIcon={<ToggleRadioButtonChecked />}
                      uncheckedIcon={<ToggleRadioButtonUnchecked />}
                      style={styles.radioButton}
                    />
                      <RadioButton
                      value="Gone"
                      label="Gone"
                      checkedIcon={<ToggleRadioButtonChecked />}
                      uncheckedIcon={<ToggleRadioButtonUnchecked/>}
                      style={styles.radioButton}
                    />
                  </RadioButtonGroup>
                  <FlatButton id={tile.id}
                              style={buttonStyle} 
                              backgroundColor='whitesmoke'
                              hoverColor="#ff4081"
                              label="Send Response" 
                              onClick={this.sendResponse.bind(this,tile.id,tile.requestList[i].id)}/>
                </form>
               </div>
            ));
        }
        return t;
    }


    render() {

        var products = Object.keys(this.props.productsToRender).length > 0 ? this.props.productsToRender : [];
        // removing duplicates
        var uniqproducts = products.filter((product, index, self) => self.findIndex(t => t.id === product.id) === index);
        console.log(uniqproducts);

        return (
            <div className="Products">
              <div style={root}>
                <GridList
                  cols={2}
                  cellHeight={200}
                  style={gridList}
                >
                 {uniqproducts.map((tile) => (
                     this.requestList(tile,tile.requestList.length)           
                  ))}
                </GridList>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Products);
