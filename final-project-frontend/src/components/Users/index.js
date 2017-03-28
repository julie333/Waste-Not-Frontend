import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllUsersData,addGroupRequests,removeGroupRequests } from '../../store/actions.js';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { usersListContainer, usersList } from './constants.js';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import IconButton from 'material-ui/IconButton';

class Users extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = (userId) => {
        console.log(this.props);
        const fetchAction = addGroupRequests(userId,this.props.currentGroup);
        this.props.dispatch(fetchAction);
   }


    render() {
        console.log(this.props.usersToRender)
        var self = this;
        const users = Object.keys(this.props.usersToRender).length > 0 ? this.props.usersToRender : [];
        return (
            <div className="usersListContainer" style={usersListContainer}>
                    <List className="usersList" style={usersList}>
                         {users.map(function(user, index)  {
                            return(  
                                <ListItem  
                                     key={ user.id } 
                                     primaryText={user.username}
                                     disabled={false}
            
                                     leftAvatar={
                                        <Avatar
                                          src={user.avatar}
                                          size={40}
                                        />
                                     } 
                                     rightIcon={
                                        <IconButton>
                                          <ContentAddCircleOutline onTouchTap={() => self.handleClick(user.id)}/>
                                        </IconButton>}
                                 >  
                                </ListItem>  
                            )
                            })}          
                    </List>
            </div>
        )

    }
}


const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Users);

// const displayAllUsersAction = fetchAllUsersData(this.state);
//  this.props.dispatch(displayAllUsersAction)
//      .then(() => {
//         console.log(this.props.users)       
//      });

     // var productId = Object.keys(this.props.params.productId).length > 0 ? this.props.params.productId : [];
     // const fetchAction = fetchDataByProduct(productId);
      
     // this.props.dispatch(fetchAction)
     //        .then(() => {
     //            console.log("After Fetch",this.props)
     //        });