// Actions
export const LOGIN = 'login';
export const DISPLAY_USERS = 'fetchAllUsersData';
export const DISPLAY_USER_DATA = 'fetchDataByUser';
export const DISPLAY_ALL_PRODUCTS = 'fetchAllProductsData';
export const DISPLAY_PRODUCT = 'fetchDataByProduct';
export const DISPLAY_GROUP = 'fetchDataByGroup';
export const ADD_GROUP = 'addGroup';
export const ADD_PRODUCT = 'addProduct';
export const ADD_PRODUCT_GROUP = 'addProductToGroup';
export const REGISTER = 'register';
export const SEARCH = 'search';
export const SEARCH_USERS = 'searchUsers';
export const PRODUCTS_REQUESTED_BY_OTHERS = 'fetchProductsRequestedByOthers';
export const GROUP_REQUESTS = 'addGroupRequests';
export const REMOVE_GROUP_REQUESTS = 'removeGroupRequests';
export const FRIEND_REQUESTS = 'fetchFriendRequests';
export const TOGGLE_GROUP = 'toggleGroup';
export const DELETE_GROUP = 'deleteGroup';
export const ADD_TO_WISHLIST = 'addToWishlist';
export const PRODUCT_REQUEST_HANDLER = 'productRequestHandler';

const BASE_URL = 'http://localhost:8080/';
// const BASE_URL = 'https://vast-ravine-27244.herokuapp.com/';

export const fetchAllUsersData = () => {
    return (dispatch) => {
        return fetch(BASE_URL + 'users/')
            .then(data => data.json())
            .then(allUsersArray => {
                dispatch({
                    type: DISPLAY_USERS,
                    data: allUsersArray,
                })
            });
    }
}

export const fetchDataByUser = (id) => {
    return (dispatch) => {

        return fetch(BASE_URL + 'users/' + id + '/')
            .then(data => data.json())
            .then(userDetailsArray => {
                dispatch({
                    type: DISPLAY_USER_DATA,
                    data: userDetailsArray,
                    userId: id,
                })
            });
    }
}

export const fetchAllProductsData = () => {
    return (dispatch) => {
        return fetch(BASE_URL + 'products/')
            .then(data => data.json())
            .then(allProductsArray => {
                dispatch({
                    type: DISPLAY_ALL_PRODUCTS,
                    data: allProductsArray,
                })
            });
    }
}

export const fetchDataByProduct = (id) => {
    return (dispatch) => {

        return fetch(BASE_URL + 'products/' + id + '/')
            .then(data => data.json())
            .then(productDetails => {
                dispatch({
                    type: DISPLAY_PRODUCT,
                    data: productDetails,
                    productId: id,
                })
            });
    }
}

export const fetchDataByGroup = (id) => {
    return (dispatch) => {

        return fetch(BASE_URL + 'groups/' + id + '/')
            .then(data => data.json())
            .then(groupDetails => {
                dispatch({
                    type: DISPLAY_GROUP,
                    data: groupDetails,
                    groupId: id,
                })
            });
    }
}


export const fetchProductsRequestedByOthers = (productId, userId) => {

    return (dispatch) => {
        fetch(BASE_URL + 'users/' + userId + '/productsRequested/' + productId + '/toggle');
    }

};


export const productRequestHandler = (userId, productId, selected) => {

    const myHeaders = new Headers({
        'Content-Type': 'application/json',
    });

    const config = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(selected),
    }

    return (dispatch) => {
        return fetch(BASE_URL + 'products/' + userId + '/requestAction/' + productId, config);
    }

};


export const addGroupRequests = (userId, groupId) => {
    return (dispatch) =>
        fetch(BASE_URL + 'users/grouprequest/add/' + userId + '/' + groupId);
};

export const removeGroupRequests = (userId, groupId) => {
    return (dispatch) =>
        fetch(BASE_URL + 'users/grouprequest/remove/' + userId + '/' + groupId);
};


export const toggleGroup = (userId, groupId) => {
    return (dispatch) =>
        fetch(BASE_URL + 'users/' + userId + '/groups/' + groupId + '/toggle');
};

export const deleteGroup = (userId, groupDeleteId) => {
    console.log("In actions", groupDeleteId)
    return (dispatch) =>
        fetch(BASE_URL + 'groups/deletegroup/' + groupDeleteId + '/');
};

export const fetchFriendRequests = (userId, friendId) => {
    return (dispatch) =>
        fetch(BASE_URL + 'users/friendrequest/' + userId + '/' + friendId);
};

export const addProduct = (addProductsFormState, userId) => {
    console.log('submitted form data: ', addProductsFormState);

    const myHeaders = new Headers({
        'Content-Type': 'application/json',
    });

    const config = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(addProductsFormState),
    }

    //post request to add new Product to DB
    return fetch(BASE_URL + 'users/' + userId + '/createNewProduct', config)
        .then(results => results.json())
        .then(productData => {
            console.log('config ', config);
            console.log('fetched products', productData);
        })
}

export const addProductToGroup = (addProductsFormState, userId, groupId) => {
    console.log('submitted form data: ', addProductsFormState);

    const myHeaders = new Headers({
        'Content-Type': 'application/json',
    });

    const config = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(addProductsFormState),
    }

    //post request to add new Product to DB
    return fetch(BASE_URL + 'users/' + userId + '/createNewProduct/' + groupId + '/', config)
        .then(results => results.json())
        .then(productData => {
            console.log('config ', config);
            console.log('fetched products', productData);
        })
}

export const addGroup = (addGroupFormState, adminId) => {
    console.log('submitted form data: ', addGroupFormState);

    const myHeaders = new Headers({
        'Content-Type': 'application/json',
    });

    const config = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(addGroupFormState),
    }

    //post request to add new Group to DB

    return fetch(BASE_URL + 'users/' + adminId + '/createNewGroup', config)
        .then(results => results.json())
        .then(groupData => {
            console.log('config ', config);
            console.log('fetched group', groupData);
        })
}

export const addToWishlist = (userId, wish) => {

    const myHeaders = new Headers({
        'Content-Type': 'application/json',
    });

    const config = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(wish),
    }

    return (dispatch) =>
        fetch(BASE_URL + 'users/' + userId + '/wishlist', config);
}

export const search = (searchedItem) => {

    return (dispatch) => {
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
        });

        const config = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(searchedItem)
        }

        return fetch(BASE_URL + 'searchedproducts', config)
            .then(data => data.json())
            .then(productObj => {
                var products = Object.keys(productObj).length > 0 ? productObj : [];
                if (products.length===0) {
                    console.log('no products were found');
                } else {
                    console.log('products were found');
                }
                dispatch({
                    type: SEARCH,
                    data: productObj
                })
            });
    }
}

export const searchUsers = (searchedUser) => {

    return (dispatch) => {
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
        });

        const config = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(searchedUser)
        }

        return fetch(BASE_URL + 'searchedusers', config)
            .then(data => data.json())
            .then(userObj => {
                var users = Object.keys(userObj).length > 0 ? userObj : [];
                if (users.length===0) {
                    console.log('no users were found', users);
                } else {
                    console.log('users were found');
                }
                dispatch({
                    type: SEARCH_USERS,
                    data: userObj
                })
            });
    }
}

export const register = (addRegisterFormState) => {
    console.log('submitted form data: ', addRegisterFormState);

    const myHeaders = new Headers({
        'Content-Type': 'application/json',
    });

    const config = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(addRegisterFormState),
    }
    return fetch(BASE_URL + 'register', config)
}


export const login = (loginUser) => {

    return (dispatch) => {
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
        });
        const config = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(loginUser)
        }

        return fetch(BASE_URL + 'login/', config)
            .then(data => data.json())
            .then(userObj => {
                if (userObj.id === null) {
                    console.log('the email and password combination was wrong');
                } else {
                    console.log('successful LOGIN');
                }

                dispatch({
                    type: LOGIN,
                    data: userObj
                })
            });
    }
}



// export const deleteGroup = (userId, groupDeleteId) => {
// console.log("In actions",groupDeleteId)


//         const myHeaders = new Headers({
//             'Content-Type': 'application/json',
//              'Access-Control-Allow-Origin': "http://localhost:3000" 
//         });

//         const config = {
//             method: 'DELETE',
//             headers: myHeaders,
//         }

//  return fetch(BASE_URL + 'groups/deletegroup/'+ groupDeleteId,config )
//         .then(response => response.json())
//         .then(()=>{
//             console.log('config ', config);
//             console.log('In here');
//         });

// };
