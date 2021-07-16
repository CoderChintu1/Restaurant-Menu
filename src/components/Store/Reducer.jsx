import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART, DECREMENT_PRODUCT_FROM_CART} from "./Type";


const addProduct = (state, product) => {
    const copy = [...state.carts]; 
    const curItemIndex = copy.findIndex((i) => i.product.id === product.id);
    if(curItemIndex < 0){
        copy.push({product, quantity: 1});
    }
    else{
        const copyItem = {...copy[curItemIndex]};
        copyItem.quantity++;
        copy[curItemIndex] = copyItem;
    }
    let copysum = state.sum;
    copysum += product.price;
    return {...state, carts: copy, sum: copysum};
};

const decrementProduct = (state, productID) => {
    const copy = [...state.carts];
    const curItemIndex = copy.findIndex((i) => i.product.id === productID);
    let copysum = state.sum;
    if(curItemIndex >= 0){
        const curItem = {...copy[curItemIndex]};
        console.log(curItem);
        curItem.quantity--;
        copysum -= curItem.product.price;

        if (curItem.quantity <= 0) {
            copy.splice(curItemIndex, 1);
        }
        else {
            copy[curItemIndex] = curItem;
        }
    }
    return { ...state, carts: copy, sum:copysum};
};

const deleteProduct = (state, productID) => {
    const copy = [...state.carts];
    const curItemIndex = copy.findIndex((i) => i.product.id === productID);

    let copysum = state.sum;
    if(curItemIndex >= 0){
        const curItem = {...copy[curItemIndex]};
        copysum -= (curItem.product.price * copy[curItemIndex].quantity);
        copy.splice(curItemIndex, 1);
    }
    return { ...state, carts: copy, sum: copysum};
}

const clearCart = (state) => {
    return {
        ...state,
        carts: [], 
        sum: 0,
    };
};


const reducer = (state, action) =>{
    switch (action.type){
        case ADD_TO_CART:
            return addProduct(state, action.payload);
        case REMOVE_FROM_CART:
            return deleteProduct(state, action.payload);
        case CLEAR_ALL_FROM_CART:
            return clearCart(state);
        case DECREMENT_PRODUCT_FROM_CART:
            return decrementProduct(state, action.payload);
        default:
            return state;
    }
};

export default reducer;