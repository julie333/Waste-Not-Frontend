import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ActionZoomIn from 'material-ui/svg-icons/action/zoom-in';
import NavigationFullscreen from 'material-ui/svg-icons/navigation/fullscreen';
import NavigationFullscreenExit from 'material-ui/svg-icons/navigation/fullscreen-exit';
import MapsZoomOutMap from 'material-ui/svg-icons/maps/zoom-out-map';
import { root, gridList } from './constants.js';

class Products extends Component {

    constructor(props) {
        super(props);
    }

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
    cols={3}
      cellHeight={180}
      style={gridList}
    >
      <Subheader style={root} >You Shared these ..</Subheader>
      {products.map((tile) => (
        <GridTile  onTouchTap={this.handleZoom.bind(this, tile.id)}
          key={tile.id}
          title={tile.productName}
          subtitle={<span>- <b>{tile.productOwner.username}</b></span>}
          actionIcon={<IconButton><MapsZoomOutMap color="white" /></IconButton>}
        >
          <img src={tile.productImageUrl} />
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


