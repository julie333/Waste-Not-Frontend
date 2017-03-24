import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ContentAddCircle  from 'material-ui/svg-icons/content/add-circle';
import SocialGroupAdd from 'material-ui/svg-icons/social/group-add';
import SocialNotifications  from 'material-ui/svg-icons/social/notifications';
import SocialShare from 'material-ui/svg-icons/social/share';

const itemAdd = <ContentAddCircle/>;
const groupAdd = <SocialGroupAdd/>;
const nearbyIcon = <IconLocationOn />;
const notifications = <SocialNotifications/>;
const shareTo = <SocialShare />;

const bottomNavigation ={

    width: '100%', 
    height: '2%',
    textAlign: 'center',
    backgroundColor: '#008F95',
}

class BottomNavigationUser extends Component {
  state = {
    selectedIndex: 0,
  };

  

addProduct = (index) => {

    this.setState({
           selectedIndex: index,
        })
    this.props.router.push('/users/addNewProduct');
};

addGroup = (index) => {

    this.setState({
           selectedIndex: index,
        })
    this.props.router.push('/users/createNewGroup');
};
  

 render() {
    return (

      <Paper style={bottomNavigation} zDepth={4}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Items"
            icon={itemAdd}
            onTouchTap={() => this.addProduct(0)}
          />
          <BottomNavigationItem
            label="Groups"
            icon={groupAdd}
            onTouchTap={() => this.addGroup(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Notifications"
            icon={notifications}
            onTouchTap={() => this.select(3)}
          />
          <BottomNavigationItem
            label="Share"
            icon={shareTo}
            onTouchTap={() => this.select(4)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationUser;