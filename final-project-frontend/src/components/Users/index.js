import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { fetchAllUsersData } from '../../store/actions.js';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { usersListContainer, usersList } from './constants.js';

class Users extends Component {

    constructor(props) {
        super(props);

        const displayAllUsersAction = fetchAllUsersData(this.state);
  		this.props.dispatch(displayAllUsersAction)
            .then(() => {
               console.log(this.props.users)
                 
            });
    }

     render() {
     console.log('this.props ',this.props.users)
     const users = Object.keys(this.props.users).length > 0 ? this.props.users : [];
     console.log(users)
     return (
		<div className="usersListContainer" style={usersListContainer}>
                    <List className="usersList" style={usersList}>
                         {users.map(function(user, index)  {
                         	return(  
                         	   	 <ListItem  key={ index } 
                         	   	 primaryText="heel"
   				  				 disabled={false}
      			   				 leftAvatar={
		       						<Avatar
							          src="http://www.bangbangent.com/images/product-placeholder.jpg"
							          size={80}
		        					/>
   								 } >
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

