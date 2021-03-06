import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import SocialGroupAdd from 'material-ui/svg-icons/social/group-add';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';

const itemAdd = <ContentAddCircle/>;
const groupAdd = <SocialGroupAdd/>;
const nearbyIcon = <IconLocationOn />;

const bottomNavigation = {

    width: '100%',
    height: '2%',
    textAlign: 'center',
    backgroundColor: '#008F95',
}

class BottomNavigationUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            notificationsCount: 0,
        };
    }


    addProduct = (index) => {

        this.setState({
            selectedIndex: index,
        })
        this.props.router.push('/users/addNewProduct/');
    };

    addGroup = (index) => {

        this.setState({
            selectedIndex: index,
        })
        this.props.router.push('/users/createNewGroup/');
    };

    locateNearby = (index) => {

        this.setState({
            selectedIndex: index,
        })
        this.props.router.push('/users/addNewProduct/');
    };

    fetchNotifications = (index) => {

        this.setState({
            selectedIndex: index,
        })

        this.props.router.push('/notifications');
    }

    viewCart = (index) => {

        this.setState({
            selectedIndex: index,
        })
        this.props.router.push('/users/productsRequested/currentUser');
    };


    render() {

        const notificationsCount = Object.keys(this.props.currentUser).length > 0 ?
            this.props.currentUser.productsRequestedByOthers.length +
            this.props.currentUser.groupRequests.length +
            this.props.currentUser.friendsRequests.length : 0;

        console.log('this.props', this.props)
        console.log('notificationsCount', notificationsCount)

        const cartCount = Object.keys(this.props.currentUser).length > 0 ?
                                      this.props.currentUser.productsRequestedByUser.length +
                                      this.props.currentUser.productsRecieved.length : 0;

        const notifications = <div>
                                  <NotificationBadge count={notificationsCount} effect={Effect.SCALE}/>
                                  <SocialNotifications/>
                              </div>;

        const cart = <div>
                          <NotificationBadge count={cartCount} effect={Effect.SCALE}/>
                          <ActionShoppingCart/>
                      </div>;

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
                      onTouchTap={() => this.locateNearby(2)}
                    />
                    <BottomNavigationItem
                      label="Notifications"
                      icon={notifications}
                      onTouchTap={() => this.fetchNotifications(3)}
                    />
                    <BottomNavigationItem
                      label="List"
                      icon={cart}
                      onTouchTap={() => this.viewCart(4)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default BottomNavigationUser;
