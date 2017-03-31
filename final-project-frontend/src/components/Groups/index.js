import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-cardstack';
import CardStack from './cardstack.js';
import Avatar from 'material-ui/Avatar';
import { box, buttonStyle, cardbox, imgStyle, headerStyle, toggleStyle } from './constants.js';
import Toggle from 'material-ui/Toggle';
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import MapsDirections from 'material-ui/svg-icons/maps/directions';
import Users from '../Users';
import { searchUsers, toggleGroup, deleteGroup } from '../../store/actions.js';
import Interaction from '../Interaction';
import HomeIcon from '../HomeIcon';
import BottomNavigationUser from '../BottomNavigationUser';

class Groups extends Component {


    constructor(props) {
        super(props);

        this.state = {
            open: false,
            searchedUser: '',
            expanded: false,
            groupId: 0,
            rerender: false,
            openDelete: false,
            openInteractionDelete: false,
            openInteractionToggle: false,
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleOpenDelete = () => {
        this.setState({ openDelete: true });
    };

    handleClose = () => {
        this.setState({
            open: false,
            openDelete: false,
        });
    };

    handleCardClick = (key) => {

        this.setState({ groupId: key });

    };

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };

    handleToggle = (event, toggle) => {

        this.setState({
            openInteractionToggle: true,
        })

        console.log("I am being toggled");
        const fetchAction = toggleGroup(this.props.currentUser.id, this.state.groupId);
        this.props.dispatch(fetchAction);
        this.setState({ expanded: toggle });
    };

    handleSearchBoxChange = (event) => {

        this.setState({
            searchedUser: event.currentTarget.value
        })
    };

    handleSearch = (event) => {

        event.preventDefault();

        const searchAction = searchUsers(this.state.searchedUser);

        this.props.dispatch(searchAction)
            .then(() => {
                this.setState({
                    searchedUser: '',
                })
            })

    };

    handleDelete = () => {

        this.setState({
            openInteractionDelete: true,
        })

        const fetchAction = deleteGroup(this.props.currentUser.id, this.state.groupId);
        console.log("In Delete", this.state.groupId)
        this.props.dispatch(fetchAction);
        this.setState({ openDelete: false });
    };

    handleGoToGroup = () => {
      this.props.router.push('currentUser/groups/'+this.state.groupId)
    };


    render() {

        const actions = [
            <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
            <FlatButton
        label="Submit"
        primary={true}
        hoverColor={'#67BCDB'}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
        ];

        const actionDelete = [
            <FlatButton
        label="No"
        primary={true}
        onTouchTap={this.handleClose}
      />,
            <FlatButton
        label="Yes"
        primary={true}
        hoverColor={'#67BCDB'}
        keyboardFocused={true}
        onTouchTap={this.handleDelete.bind(this.state.groupId)}
      />,
        ];

        var groups = Object.keys(this.props.currentUser).length > 0 ? this.props.currentUser.groups : [1, 2, 3];

        return (
          <div>
          <div style = {headerStyle}>
            <HomeIcon router={this.props.router}/>
            <div className="Groups" >
            <h2 style={{fontSize: 40}}> YOUR GROUPS </h2>
          {Object.keys(this.props.currentUser).length  > 0  &&
          <div style={box}>
          <div style={cardbox}>
          <CardStack
              width={600}
              height= {this.props.currentUser.groups.length<=2?450: this.props.currentUser.groups.length*125}
              background="whitesmoke"
              hoverOffset={25}>

               {groups.map((group, index) => ( 

               <Card background= { ['#8dd3c7',  '#bebada',  '#80b1d3',  '#b3de69',
                                   '#fccde5', '#bc80bd', '#ccebc5'][Math.random()*6|0] } 
                    key={index}
                    cardClicked={this.handleCardClick.bind(this,group.id)}>
                     <div className="header">
                     <Avatar src = {group.groupImage} size={70} style={imgStyle}/>  
                       { group.admin.username!==this.props.currentUser.username && 
                        <div style={toggleStyle} >                      
                            <Toggle
                                toggled={this.state.expanded}
                                onToggle={this.handleToggle}
                                labelPosition="right"
                                label="Leave Group"
                            />
                        </div> 
                        }
                      <h2> {group.groupName} </h2>                         
                      </div>
                      <br/>                         
                      <p>
                         {group.description}
                         <br/>
                         Owner : {group.admin.username}
                      </p> 
                      <div>
                        <div>                  
                            <IconButton>
                                  <MapsDirections color="black" onTouchTap={this.handleGoToGroup}/>
                            </IconButton>Visit Group
                          </div>
                          { group.admin.username===this.props.currentUser.username && 
                          <div>
                          <div>
                              <IconButton>
                                    <SocialPersonAdd color="black" onTouchTap={this.handleOpen}/>
                              </IconButton>Invite Member
                               <Dialog
                                title="Search for a user"
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                              >
                              <TextField 
                               hintText="Enter username to search"
                               onChange={this.handleSearchBoxChange}
                              />
                              <FloatingActionButton mini={true} onClick={this.handleSearch}>  
                                  <ActionSearch />  
                              </FloatingActionButton>
                              <Users usersToRender={this.props.users} currentGroup={this.state.groupId} />
                              </Dialog>
                          </div>
                           <div>                          
                              <IconButton>
                                    <ActionDeleteForever color="black" onTouchTap={this.handleOpenDelete}/>
                              </IconButton>Delete Group
                                <Dialog
                                title="Delete"
                                actions={actionDelete}
                                modal={false}
                                open={this.state.openDelete}
                                onRequestClose={this.handleClose}
                              >
                              <p> Are you sure you want to delete this group? </p>
                              </Dialog>
                            </div>
                          </div>
                          }
                     </div>         
              </Card> 
           ))}
          </CardStack> 
          </div> 
          </div>
         }
         <br/><br/>
         <Interaction open = {this.state.openInteractionToggle} message = "You have left the Group"/>
         <Interaction open = {this.state.openInteractionDelete} message = "Group Deleted"/>
    </div>
  
    </div>
      <BottomNavigationUser router={this.props.router} currentUser={this.props.currentUser}/> 
 </div>
        )
    }
}



const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Groups);
