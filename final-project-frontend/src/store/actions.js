// Actions

export const LOGIN = 'login';
export const DISPLAY_FEED = 'displayfeed';
export const DISPLAY_USERS = 'fetchAllUsersData';
export const DISPLAY_USER_DATA = 'fetchDataByUser';
export const DISPLAY_ALL_PRODUCTS = 'fetchAllProductsData';
export const DISPLAY_PRODUCT = 'fetchProductData';
export const ADD_PRODUCTS = 'fetchAllProductsData';
export const ADD_PRODUCT = 'fetchProductData';
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
            .then(productDetailsArray => {
                dispatch({
                    type: DISPLAY_PRODUCT,
                    data: productDetailsArray,
                    productId: id,
                })
            });
    }
}

export const addProduct = (addProductsFormState) => {
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

    return fetch('http://localhost:8080/Products', config)
        .then(results => results.json())
        .then(productData => {
            console.log('config ', config);
            console.log('fetched products', productData);

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
                    console.log(products);
                }

                dispatch({
                    type: SEARCH,
                    data: productObj
                })
            });
    }
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
                    console.log('the email and password combination was wrong');
                } else {
                    console.log('successful LOGIN');
                }
                console.log(userObj);
                dispatch({
                    type: LOGIN,
                    data: userObj
                })
            });
    }
}

// export const displayfeed = (currentUser) => {
//     return (dispatch) => {
//             const myHeaders = new Headers({
//                 Authorization: `Bearer ${currentUser.token}`
//             });
//             const config = {
//                 method: 'GET',
//                 headers: myHeaders
//             }
//           return fetch('https://propulsion-blitz.herokuapp.com/api/feed', config)
//                 .then(data => data.json())
//                 .then(feed => {
//                     console.log(feed);
//                 });
//         }

// };
