import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardStack, Card } from 'react-cardstack';
import Avatar from 'material-ui/Avatar';
import { style, buttonStyle, containerStyle, imgStyle, headerStyle, toggleStyle } from './constants.js';
import Toggle from 'material-ui/Toggle';
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Users from '../Users';
import { searchUsers,toggleGroup } from '../../store/actions.js'

class Groups extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            searchedUser: '',
            expanded:false,
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleCardClick = (isCardSelected) => {
        console.log(isCardSelected);
    };


    handleToggle = (groupId) => {
        const fetchAction = toggleGroup(this.props.currentUser.id, groupId);
        this.props.dispatch(fetchAction);
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
                console.log(this.props.users)
            })
 
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
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
        ];

        console.log(this.props)

        var groups = Object.keys(this.props.currentUser).length > 0 ? this.props.currentUser.groups : [1, 2, 3];

        return (

            <div className="Groups" style={containerStyle} >
         {  Object.keys(this.props.currentUser).length  > 0  &&
        <CardStack
            height= {this.props.currentUser.groups.length*100}
            width={'100%'}
            background="white"
            hoverOffset={25}>

             {groups.map((group) => ( 

             <Card background= {'#' + (Math.random() * 0xFFFFFF << 0).toString(16)} 
                  key={group.id}
                  cardClicked={this.handleCardClick.bind(this)}>
                   <div className="header">
                   <Avatar src = {group.groupImage} size={70} style={imgStyle}/>
                        <div style={toggleStyle} > 
                            <Toggle      
                               
                                labelPosition="right"
                                label="Join/Leave"
                            />   
                        </div>   
                    <h2 style={headerStyle}> {group.groupName} </h2>                         
                    </div>
                   <br/>                         
                   <p style={style}>
                       {group.description}
                       <br/>
                       Owner : {group.admin.username}
                   </p> 
                    <div style={headerStyle}>
                        { group.admin.username===this.props.currentUser.username &&  
                        <div>
                        <IconButton><SocialPersonAdd color="black" onTouchTap={this.handleOpen}/></IconButton>Invite Member
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
                            <Users usersToRender={this.props.users} currentGroup={group.id} />
                            </Dialog>
                        </div>
                        }
                   </div>          
            </Card> 
         ))}
        </CardStack> 
         }
    </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Groups);

// toggled={this.state.expanded}  
//  onToggle={this.handleToggle(group.id)}
