import { combineReducers } from 'redux';
import {
    LOGIN,
    DISPLAY_USERS,
    DISPLAY_USER_DATA,
    DISPLAY_ALL_PRODUCTS,
    DISPLAY_PRODUCT,
    SEARCH,
    ADD_PRODUCT,
    ADD_GROUP,
    REGISTER,
    PRODUCTS_REQUESTED_BY_OTHERS,
    SEARCH_USERS,
    GROUP_REQUESTS,
    REMOVE_GROUP_REQUESTS,
    FRIEND_REQUESTS,
    TOGGLE_GROUP,
    DISPLAY_GROUP,
    ADD_PRODUCT_GROUP,
    PRODUCT_REQUEST_HANDLER
} from './actions.js';

function usersReducer(state = {}, action) {
    switch (action.type) {
        case DISPLAY_USERS:
            let newState = [];
            action.data.forEach(function(userObject) {
                newState.push(userObject);
            });
            return newState;
        case REGISTER:
            return action.data;
        case SEARCH_USERS:
            let searchState = [];
            action.data.forEach(function(userObject) {
                searchState.push(userObject);
            });
            return searchState;
        default:
            return state;
    }
}

function currentUserReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return action.data;
        case DISPLAY_USER_DATA:
            return action.data;
        case ADD_PRODUCT:
            return action.data;
        case ADD_PRODUCT_GROUP:
            return action.data;
        case ADD_GROUP:
            return action.data;
        default:
            return state;
    }
}


function productsReducer(state = {}, action) {
    switch (action.type) {

        case DISPLAY_ALL_PRODUCTS:
            let newState = [];
            action.data.forEach(function(productObject) {
                newState.push(productObject);
            });
            return newState;

        case DISPLAY_PRODUCT:
            return action.data;

        case PRODUCT_REQUEST_HANDLER:
            return action.data;

        case SEARCH:
            let searchState = [];
            action.data.forEach(function(productObject) {
                searchState.push(productObject);
            });
            return searchState;
        default:
            return state;
    }
}

function groupsReducer(state = {}, action) {
    switch (action.type) {

        case DISPLAY_GROUP:
            return action.data;
        default:
            return state;
    }
}



const reducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
    products: productsReducer,
    groups: groupsReducer,

});

export default reducer;
