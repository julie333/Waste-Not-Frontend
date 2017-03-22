import React, { Component } from 'react';
import { connect } from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { styles } from './constants.js';


class Products extends Component {

    render() {

    const styles = {
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            fontFamily: 'Nunito',
            color: 'whitesmoke',
            fontSize: 20,
          },
          gridList: {
            width: 500,
            height: 450,
            overflowY: 'auto',
            fontFamily: 'Nunito',
            color: 'whitesmoke',
          },
    };

    var products = Object.keys(this.props.productsToRender).length > 0 ? this.props.productsToRender : [];

           console.log('this.props ',this.props)
           console.log('this.props.productsToRender ',this.props.productsToRender)

        return (
            <div className="Products">

  <div style={styles.root}>
    <GridList
    cols={3}
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader style={styles.root} >You Shared these ..</Subheader>
      {products.map((tile) => (
        <GridTile
          key={tile.id}
          title={tile.productName}
          subtitle={<span>- <b>{tile.productOwner.username}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
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


