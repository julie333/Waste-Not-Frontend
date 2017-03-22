import { combineReducers } from 'redux';
import { LOGIN, DISPLAY_FEED, DISPLAY_USERS, DISPLAY_USER_DATA, DISPLAY_ALL_PRODUCTS,DISPLAY_PRODUCT, SEARCH  } from './actions.js';

function usersReducer(state = {}, action) {
    switch (action.type) {
        case DISPLAY_USERS:
            let newState = [];
            action.data.forEach( function(userObject) {
                newState.push(userObject);
            });
            return newState;
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
        default:
            return state;
    }
}

function productsReducer(state = {}, action) {
    switch (action.type) {

        case DISPLAY_ALL_PRODUCTS:
                let newState = [];
                action.data.forEach( function(productObject) {
                newState.push(productObject);
            });
            return newState;

        case DISPLAY_PRODUCT:
            return action.data;

        case SEARCH:
                let searchState = [];
                action.data.forEach( function(productObject) {
                searchState.push(productObject);
            });
            return searchState;
        default:
            return state;
    }
}

const reducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
    products: productsReducer,
  
});

export default reducer;

