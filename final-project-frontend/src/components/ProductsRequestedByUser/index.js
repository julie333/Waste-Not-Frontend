import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Products';
import HomeIcon from '../HomeIcon';
import BottomNavigationUser from '../BottomNavigationUser';

const style = {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 30,
    width: '90%',
    color: '#67BCDB',
    backgroundColor: 'whitesmoke',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
};

class ProductsRequestedByUser extends Component {

    render() {
        var products = Object.keys(this.props.currentUser).length > 0 ? this.props.currentUser.productsRequestedByUser : [];
        var productsRecieved = Object.keys(this.props.currentUser).length > 0 ? this.props.currentUser.productsRecieved : [];

        return (
            <div style={{ backgroundColor:'#67BCDB', }}>
            { Object.keys(this.props.currentUser.productsRequestedByUser).length > 0 &&
            <div className="ProductsRequestedByUser" style={style}>
             <HomeIcon router={this.props.router}/>
            <h2>ITEMS REQUESTED BY YOU</h2>
              <Products productsToRender={ products }
              router={this.props.router}/> 
            </div>}
            { Object.keys(this.props.currentUser.productsRecieved).length > 0 &&
            <div className="ProductsRecieved" style={style}>
            <HomeIcon router={this.props.router}/>
            <h2>You request has been accepted. Go collect them !!!</h2>
              <Products productsToRender={ productsRecieved }
              router={this.props.router}/> 
            </div>}
             {
                products.length===0 && productsRecieved.length===0 &&
                <div className="ProductsRequestedByUser" style={style}>
                  <h2>You have no new requests</h2>
                </div>
             }
             <BottomNavigationUser router={this.props.router} currentUser={this.props.currentUser}/>        
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ProductsRequestedByUser);
