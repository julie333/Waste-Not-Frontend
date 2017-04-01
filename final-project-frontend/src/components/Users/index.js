import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGroupRequests } from '../../store/actions.js';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { usersListContainer, usersList } from './constants.js';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import IconButton from 'material-ui/IconButton';
import Interaction from '../Interaction';

class Users extends Component {

    constructor(props) {
        super(props);


        this.state = {
            open: false,
        };
    }

    handleClick = (userId) => {

        this.setState({
            open: true,
        })


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
                    <Interaction open={this.state.open} message="Group Request sent"/>
            </div>
        )

    }
}


const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Users);
