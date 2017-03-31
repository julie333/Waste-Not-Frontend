import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Products';
import HomeIcon from '../HomeIcon';
import BottomNavigationUser from '../BottomNavigationUser';

const style = {
    fontFamily: 'Nunito',
    fontWeight :'bold',
    fontSize: 30,
    width: '90%',
    color: '#67BCDB',
    backgroundColor:'whitesmoke',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
};

class ProductsRequestedByUser extends Component {

    constructor(props) {
        super(props);

    }
    render() {
          var products = Object.keys(this.props.currentUser).length > 0 ? this.props.currentUser.productsRequestedByUser : [];
        
        return (
            <div style={{ backgroundColor:'#67BCDB', }}>
            <div className="ProductsRequestedByUser" style={style}>
            <HomeIcon router={this.props.router}/>
            <h2>ITEMS REQUESTED BY YOU</h2>
              <Products productsToRender={ products }
              router={this.props.router}/> 
            </div>
             <BottomNavigationUser router={this.props.router} currentUser={this.props.currentUser}/>        
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ProductsRequestedByUser);



