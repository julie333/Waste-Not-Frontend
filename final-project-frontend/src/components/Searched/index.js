import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Products';
import HomeIcon from '../HomeIcon';

const style = {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 30,
    width: '90%',
    height: '90%',
    color: '#67BCDB',
    backgroundColor: 'whitesmoke',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
};

class Searched extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        var products = Object.keys(this.props.products).length > 0 ? this.props.products : [];

        return (
            <div style={{ backgroundColor:'#67BCDB', }}>
            <div className="Searched" style={style}>
            <HomeIcon router={this.props.router}/>
            <h2>SEARCH RESULTS</h2>
              <Products productsToRender={ products }
              router={this.props.router}/> 
            </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Searched);
