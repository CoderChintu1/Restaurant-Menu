import React, {useReducer} from "react";

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART, DECREMENT_PRODUCT_FROM_CART} from "./Type";

import Context from "./Content";
import data from "../Items/Items_data";
import reducer from "./Reducer";

const GlobalState = (props) => {
    const products = data;

    const [state, dispatch] = useReducer(reducer, {carts:[], sum:0})

    const addProductToCart = (product) => {
        dispatch({
            type: ADD_TO_CART,
            payload: product
        });
    };

    const removeProductFromCart = (productID) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: productID
        });
    };

    const clearCart = () => {
        dispatch({
            type: CLEAR_ALL_FROM_CART,
        });
    };

    const decreaseProductFromCart = (productID) => {
        dispatch({
            type: DECREMENT_PRODUCT_FROM_CART,
            payload: productID
        });
    };

   

    return <Context.Provider 
    value ={{products: products,
    addProductToCart: addProductToCart,
    removeProductFromCart:removeProductFromCart,
    clearCart: clearCart,
    decreaseProductFromCart: decreaseProductFromCart,
    sum: state.sum,
    carts: state.carts,
    }}>
        {props.children}
    </Context.Provider>
}
export default GlobalState;
