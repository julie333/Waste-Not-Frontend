import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Products';
import Groups from '../Groups';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import NavigationCheck from 'material-ui/svg-icons/navigation/check';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';
import { toggleGroup, addGroupRequests, removeGroupRequests } from '../../store/actions.js';

const style = {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 20,
    width: '80%',
    color: 'whitesmoke',
    backgroundColor: '#222',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
};


class ProductsRequestedByOthers extends Component {

    constructor(props) {
        super(props);

    }

    handleAdd = (groupId) => {
        console.log("herer", this.props.currentUser);
        const fetchAction = toggleGroup(this.props.currentUser.id, groupId);
        this.props.dispatch(fetchAction);

    }

    handleRemove = (groupId) => {
        console.log(this.props);
        const fetchAction = removeGroupRequests(this.props.currentUser.id, groupId);
        this.props.dispatch(fetchAction);

    }

    render() {
        var products = Object.keys(this.props.currentUser).length > 0 ? this.props.currentUser.productsRequestedByOthers : [];
        var groups = Object.keys(this.props.currentUser).length > 0 ? this.props.currentUser.groupRequests : [];
        var friends = Object.keys(this.props.currentUser).length > 0 ? this.props.currentUser.friendsRequests : [];
        var self = this;

        return (
            <div style={style}>
            <div className="ProductsRequestedByOthers">
            <h2>Your Products have been requested !</h2>
              <Products productsToRender={ products }
              router={this.props.router}/> 
            </div>
            <div className="GroupRequests">
            <h2>Group Requests</h2>
            <div>
               <List>
                        {groups.map(function(group, index)  {
                            return(  
                              <div>
                                <ListItem  
                                     key={ group.id } 
                                     primaryText={group.username}
                                     disabled={false}
            
                                     leftAvatar={
                                        <Avatar
                                          src={group.groupImage}
                                          size={50}
                                          style={{marginLeft : 20}}
                                        />
                                     } 
                                      leftIcon={
                                        <IconButton style={{marginLeft : 150, marginTop : -10}}>
                                            <NavigationCheck color="green" onTouchTap={() => self.handleAdd(group.id)}/>
                                            <NavigationClose color="red" onTouchTap={() => self.handleRemove(group.id)}/>
                                        </IconButton>
                                      }
                                >  
                                </ListItem>  
                                <br/>
                                <Divider/>
                                </div>
                            )  
                        })}          
                </List>
                </div>
            </div>
            <div className="FriendRequests">
            <h2>Friend Requests</h2>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ProductsRequestedByOthers);

//           rightIcon={
// <IconButton>
//   <ContentAddCircleOutline onTouchTap={() => self.handleClick(group.id)}/>
// </IconButton>}
