import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import store from './store';
import App from './components/App';
import Login from './components/Login';
import Users from './components/Users';
import CurrentUser from './components/CurrentUser';
import UserGroups from './components/UserGroups';
import RegisterForm from './components/RegisterForm';
import AddProduct from './components/AddProduct';
import AddGroup from './components/AddGroup';
import Products from './components/Products';
import ProductId from './components/ProductId';
import Searched from './components/Searched';
import Notifications from './components/Notifications';
import ProductsRequestedByUser from './components/ProductsRequestedByUser';
import Groups from './components/Groups';
// import GoogleMaps from './components/GoogleMaps';
import GroupPage from './components/GroupPage';

import './index.css';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={hashHistory}>
                 <Route path="/" component={App} /> 
                 <Route path="/login" component={Login} /> 
                 <Route path="/register" component={RegisterForm} />  
                 <Route path="/users" component={ Users } />  
                 <Route path="/users/currentUser" component={CurrentUser} />
                 <Route path="/users/addNewProduct" component={ AddProduct } />
                 <Route path="/users/createNewGroup" component={ AddGroup } />
                 <Route path="/users/currentUser/groups" component={ UserGroups } /> 
                 <Route path="/notifications" component={ Notifications }/> 
                 <Route path="/users/productsRequested/currentUser" component={ ProductsRequestedByUser } /> 
                 <Route path="/products" component={ Products } />
                 <Route path="/groups" component={ Groups } />
                 <Route path="/currentUser/groups/:groupId" component={ GroupPage } />
                 <Route path="/searchedproducts" component={ Searched } />
                 <Route path="/products/:productId" component={ ProductId } /> 
 
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// <Route path="/maps" component={ GoogleMaps }/> 
// <Router history={browserHistory}>
