import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsRequests from '../ProductsRequests';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import NavigationCheck from 'material-ui/svg-icons/navigation/check';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';
import { toggleGroup, removeGroupRequests } from '../../store/actions.js';
import Interaction from '../Interaction';
import HomeIcon from '../HomeIcon';

const style = {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 20,
    width: '80%',
    color: '#222',
    backgroundColor: 'whitesmoke',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
};

class Notifications extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openAdd: false,
            openRemove: false,
        };

    }

    handleAdd = (groupId) => {

        this.setState({
            openAdd: true,
        })



        console.log("herer", this.props.currentUser);
        const fetchAction = toggleGroup(this.props.currentUser.id, groupId);
        this.props.dispatch(fetchAction);

    }

    handleRemove = (groupId) => {

        this.setState({
            openRemove: true,
        })

        delete this.state.openRemove;

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
            <div style={{ backgroundColor:'#67BCDB', }}>
            <div style={style}>
            <div className="ProductsRequestedByOthers">
            <HomeIcon router={this.props.router}/>

            { products.length>0 &&
            <div>
                <h2>Your Products have been requested !</h2>
                <ProductsRequests productsToRender={ products }
                  router={this.props.router}/> 
            </div>
            }
            </div>
          
            { groups.length>0 &&
            <div className="GroupRequests">
            <h2>GROUP REQUESTS</h2>
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
                <Interaction open={this.state.openAdd} message="You have Joined the Group"/>
                <Interaction open={this.state.openRemove} message="Group Request Deleted"/>
            </div>
        }
          { friends.length>0 &&
            <div className="FriendRequests">
            <h2>FRIEND REQUESTS</h2>
            </div>
          }

{

friends.length===0 && groups.length===0 && products.length===0 &&
<h2>You have no new notifications</h2>

}

            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Notifications);
