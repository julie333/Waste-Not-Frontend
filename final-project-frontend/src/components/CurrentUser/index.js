import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { search, addToWishlist } from '../../store/actions.js'
import { txtBoxStyle, container, header, avatar, searchBox, productsPostedByUser, userGroups} from './constants.js';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Products from '../Products';
import Logout from '../Logout';
import Logo from '../Logo';
import BottomNavigationUser from '../BottomNavigationUser';
import UserGroups from '../UserGroups';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import ActionCardGiftcard from 'material-ui/svg-icons/action/card-giftcard';
import Dialog from 'material-ui/Dialog';
import Interaction from '../Interaction';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';

class CurrentUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchedProduct: '',
            open: false,
            openInteractionWishlist: false,
            wish: '',
        };

    }

    handleSearchBoxChange = (event) => {

        this.setState({
            searchedProduct: event.currentTarget.value
        })
    };

    handleWishBoxChange = (event) => {

        this.setState({
            wish: event.currentTarget.value
        })
    };

    handleOpen = () => {
        this.setState({
            open: true
        });
    };

    handleAdd = () => {

        const addAction = addToWishlist(this.props.currentUser.id, this.state.wish);

        this.props.dispatch(addAction);

        this.setState({
            openInteractionWishlist: true,
        });

    };

    handleClose = () => {
        this.setState({
            open: false,
            openInteractionWishlist: false,
        });
    };


    handleSearch = (event) => {

        event.preventDefault();
        const searchAction = search(this.state.searchedProduct);

        this.props.dispatch(searchAction)
            .then(() => {
                this.setState({
                    searchedProduct: '',
                })
            })
            .then(() => {
                this.props.router.push('/searchedproducts')
            })
    };


    getQuote = () => {

        return fetch('http://localhost:8080/quotes/');
    };


    render() {

        return (
            <div className="container" style={container}>          
                <div className="header" style={header}>
                    <Logo/>
                    <Logout router={this.props.router}/>
                </div>
                    <div className="header" style={header}>
                     <h1>{ this.props.currentUser.firstName+" "+this.props.currentUser.lastName  }</h1>
                            <Avatar style={avatar}
                            src={ this.props.currentUser.avatar }
                            size={90}
                          />
                </div>

                <div className="searchBox" style={searchBox}>
                    <IconButton style={{cssFloat: 'right'}}>
                        <ActionCardGiftcard color="#ff4081" onTouchTap={this.handleOpen}/>
                    </IconButton>
                      <Dialog
                          title="WISH-LIST"
                          modal={false}
                          open={this.state.open}
                          onRequestClose={this.handleClose}
                          autoScrollBodyContent={true}
                          contentStyle={{ width: '40%',}}
                      > 
                        <TextField 
                          hintText="Enter to add to WishList"
                          onChange={this.handleWishBoxChange}
                        />
                         <IconButton>
                            <ContentAddCircleOutline onTouchTap={() => this.handleAdd()}/>
                         </IconButton><br/>
                          <List>
                          {this.props.currentUser.wishList.map(function(wish, index)  {
                            return(  
                                <ListItem  
                                   key={ index } 
                                   primaryText={wish}
                                   disabled={false}

                                   rightIcon={
                                    <IconButton>
                                      <ActionFavorite color="#ff4081"/>
                                    </IconButton>
                                  }
                                >  
                                </ListItem>  
                               )
                           })}          
                         </List>
                      </Dialog>

                          <blockquote>
                              {this.getQuote}
                          </blockquote>

                          <TextField  style={txtBoxStyle} 
                                        hintText="What would you like to save ?"
                                        onChange={this.handleSearchBoxChange}
                                      />
                     <FloatingActionButton secondary={true} mini={true} onClick={this.handleSearch}>  
                            <ActionSearch />  
                     </FloatingActionButton>
                </div>

                <div className="productsPostedByUser" style={productsPostedByUser}>
                       <h2> You Recently Shared these ..</h2>
                      <Products productsToRender={this.props.currentUser.productsPosted} 
                      router={this.props.router}/>   
                </div>

                <div className="UserGroups" style={userGroups}>
                      <UserGroups groupsToRender={this.props.currentUser.groups}
                      router={this.props.router}/> 
                       </div>   
                <BottomNavigationUser router={this.props.router} currentUser={this.props.currentUser}/> 
                <Interaction open={this.state.openInteractionWishlist} message="Wish Added :)"/>       
              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(CurrentUser);

// <div> { this.props.currentUser.wishList[0].split(",").join(" - ")} </div>
