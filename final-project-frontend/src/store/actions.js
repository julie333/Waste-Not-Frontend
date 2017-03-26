// Actions
export const LOGIN = 'login';
export const DISPLAY_USERS = 'fetchAllUsersData';
export const DISPLAY_USER_DATA = 'fetchDataByUser';
export const DISPLAY_ALL_PRODUCTS = 'fetchAllProductsData';
export const DISPLAY_PRODUCT = 'fetchDataByProduct';
export const ADD_GROUP = 'addGroup';
export const ADD_PRODUCT = 'addProduct';
export const REGISTER = 'register';
export const SEARCH = 'search';



export const fetchAllUsersData = () => {
    return (dispatch) => {
        return fetch('http://localhost:8080/users/')
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

        return fetch('http://localhost:8080/users/' + id + '/')
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
        return fetch('http://localhost:8080/products/')
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

        return fetch('http://localhost:8080/products/' + id + '/')
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

export const addProduct = (addProductsFormState,userId) => {
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
    return fetch('http://localhost:8080/users/'+userId+'/createNewProduct', config)
        .then(results => results.json())
        .then(productData => {
            console.log('config ', config);
            console.log('fetched products', productData);
        })
}

export const addGroup = (addGroupFormState,adminId) => {
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

     return fetch('http://localhost:8080/users/'+ adminId +'/createNewGroup', config)
        .then(results => results.json())
        .then(groupData => {
            console.log('config ', config);
            console.log('fetched group', groupData);
        })
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

    return fetch('http://localhost:8080/searchedproducts', config)
        .then(data => data.json())
        .then(productObj => {
                var products = Object.keys(productObj).length > 0 ? productObj : [];
                if (products.length == 0) {
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

    //post request to add new User to DB

     return fetch('http://localhost:8080/register', config)
        .then(results => results.json())
        .then(userData => {
            console.log('config ', config);
            console.log('fetched user', userData);
        })
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

        return fetch('http://localhost:8080/login/', config)
            .then(data => data.json())
            .then(userObj => {
                if (userObj.id === null) {
                // console.log('the email and password combination was wrong');
                } else {
                    console.log('successful LOGIN');
                }
                // console.log(userObj);
                dispatch({
                    type: LOGIN,
                    data: userObj
                })
            });
    }
}

