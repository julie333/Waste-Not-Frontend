import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { search } from '../../store/actions.js'
import { container, header, avatar, searchBox, searchButton, productsPostedByUser,userGroups,bottomNavigation } from './constants.js';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Products from '../Products';
import BottomNavigationUser from '../BottomNavigationUser';
import UserGroups from '../UserGroups';
import { red400 } from 'material-ui/styles/colors'

class CurrentUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productName: ''
        };

    }

    handleSearchBoxChange = (event) => {

        this.setState({
            productName: event.currentTarget.value
        })
        console.log(this.state.productName)
    };

    handleSearch = (event) => {

        event.preventDefault();
        console.log(this.state)

        const searchAction = search(this.state);

        this.props.dispatch(searchAction)
            .then(() => {
                this.setState({
                    productName: '',
                })
            })
            .then(() => {
                this.props.router.push('/searchedproducts')
            })
    };


    render() {

        console.log('this.props ', this.props.currentUser)
        return (
            <div className="container" style={container}>

          
                <div className="header" style={header}>
                     <h3>{ this.props.currentUser.username }</h3>
                            <Avatar style={avatar}
                            src={ this.props.currentUser.avatar }
                            size={90}
                          />
                </div>
                <div className="searchBox" style={searchBox}>

                     <blockquote>
                     “Earth provides enough to satisfy every man's needs, but not every man's greed.” 
                      <footer>— Gandhi</footer>
                     </blockquote>

                     <input  id="txtbox" type="text" 
                             required name="search item" 
                             placeholder="  What would you like to save ?"
                             onChange={this.handleSearchBoxChange}/>
                     <FloatingActionButton  style={{ backgroundColor: red400,}} mini={true} onClick={this.handleSearch}>  
                            <ActionSearch />  
                     </FloatingActionButton>
                </div>

                <div className="productsPostedByUser" style={productsPostedByUser}>
                      <Products productsToRender={this.props.currentUser.productsPosted}/>   
                </div>
                <div className="UserGroups" style={userGroups}>
                      <UserGroups groupsToRender={this.props.currentUser.groups}/>  
                       </div>   
                                          <BottomNavigationUser/>        
              
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(CurrentUser);


