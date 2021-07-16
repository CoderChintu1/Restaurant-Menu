import {createContext} from 'react';

export default createContext({
    products:[],
    carts:[],
    sum: Number("0"),
    addProductToCart: (product) => {},
    removeProductFromCart: (productID) =>{},
    clearCart: () => {},
    decreaseProductFromCart: (productID) =>{},
    placeOrder: (carts) => {},
});