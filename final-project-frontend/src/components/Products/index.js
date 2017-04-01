import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import MapsZoomOutMap from 'material-ui/svg-icons/maps/zoom-out-map';
import { root, gridList } from './constants.js';
import IconButton from 'material-ui/IconButton';

class Products extends Component {

    handleZoom = (key) => {

        event.preventDefault();
        console.log("Item Id: ", key);
        this.props.router.push('/products/' + key);
    };

    render() {

        var products = Object.keys(this.props.productsToRender).length > 0 ? this.props.productsToRender : [];
        return (
            <div className="Products">

  <div style={root}>
    <GridList
    cols={2}
      cellHeight={200}
      style={gridList}
    >
      {products.map((tile,index) => (
        <GridTile  onTouchTap={this.handleZoom.bind(this, tile.id)}
          key={index}
          title={tile.productName}
          subtitle={<span>- <b>{tile.productOwner.username}</b></span>}
          actionIcon={<IconButton><MapsZoomOutMap color="white" /></IconButton>}
        >
          <img src={tile.productImageUrl} alt="product" />
        </GridTile>
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


