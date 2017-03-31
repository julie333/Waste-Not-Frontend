import React, { Component } from 'react';
import { connect } from 'react-redux';
import { container, header, avatar, members, productsPostedToGroup, bottomNavigation } from './constants.js';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Products from '../Products';
import Logout from '../Logout';
import BottomNavigationUser from '../BottomNavigationUser';
import TextField from 'material-ui/TextField';
import MapsDirections from 'material-ui/svg-icons/maps/directions';
import { fetchDataByGroup } from '../../store/actions.js';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import HomeIcon from '../HomeIcon';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'whitesmoke',
  },
};


class GroupPage extends Component {

    constructor(props) {
        super(props);

        var groupId = Object.keys(this.props.params.groupId).length > 0 ? this.props.params.groupId : [];
        const fetchAction = fetchDataByGroup(groupId);

        this.props.dispatch(fetchAction)
            .then(() => {
                console.log("After Fetch", this.props)
            });
    }
    render() {
        console.log(this.props)
        return (
            <div className="container" style={container}> 
             {Object.keys(this.props.groups).length  > 0  &&    
              <div>     
                 <div className="header" style={header}>
                     <HomeIcon router={this.props.router}/>
                     <h2>{this.props.groups.groupName}</h2>
                            <Avatar style={avatar}
                            src={ this.props.groups.groupImage }
                            size={250}
                          />
                  </div>
                  <div className="members" style={members}>
                  <h2>Group Members</h2>
                      <div style={styles.root}>
                        <GridList style={styles.gridList} cols={2.2}>
                          {this.props.groups.members.map((tile) => (
                            <GridTile
                              key={tile.id}
                              title={tile.username}
                              titleStyle={styles.titleStyle}
                              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                            >
                              <img src={tile.avatar} />
                            </GridTile>
                          ))}
                        </GridList>
                      </div>
                  </div>
                  <div className="productsPostedToGroup" style={productsPostedToGroup}>
                        <h2> Items Shared to Group </h2>
                        <Products productsToRender={this.props.groups.productsSharedToGroup} 
                        router={this.props.router}/>   
                  </div> 
              </div>  
                }  
              <BottomNavigationUser router={this.props.router} currentUser={this.props.currentUser}/>              
            </div>
          )
        }
      }

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(GroupPage);









 

