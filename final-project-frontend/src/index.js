import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
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


import './index.css';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browserHistory}>
                 <Route path="/" component={App} /> 
                 <Route path="/login" component={Login} /> 
                 <Route path="/register" component={RegisterForm} />  
                 <Route path="/users" component={ Users } />  
                 <Route path="/users/currentUser" component={CurrentUser} />
                 <Route path="/users/currentUser/products/addNewProduct" component={ AddProduct } />
                 <Route path="/users/currentUser/createNewGroup" component={ AddGroup } />
                 <Route path="/users/currentUser/groups" component={ UserGroups } /> 
                 <Route path="/products" component={ Products } />
                 <Route path="/searchedproducts" component={ Searched } />
                 <Route path="/products/:productId" component={ ProductId } />  
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);


                 // <Route path="/users/:userId" component={ UserId } />  
                 // <Route path="/users/:username" component={ UserName } />  
                 // <Route path="/users/:userId/groups/:groupId/toggle" component={ JoinLeaveGroup } /> 

