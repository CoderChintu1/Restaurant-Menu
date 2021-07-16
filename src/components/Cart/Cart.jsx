import React, { useRef } from "react";
import CartIcon from "./../svg/salad.png";
import UseOnClickOutside from "../hooks/UseOnClickOutside";
import deleteButton from "./../svg/delete-button.png";
import "./Cart.css";

const Cart = ({isToggle, setToggle, isTrigger, setTrigger, carts, sum, addProductToCart, removeProductFromCart, clearCart, decreaseProductFromCart}) => {
    const SideBarRef = useRef();
    UseOnClickOutside(SideBarRef, ()=> setToggle(false));

    const expand = "expand";
    const shrink = "shrink";
    
    return (
        <>
            <div className="wrapper" onClick={()=> setToggle(true)}>
                <img src={CartIcon} alt = "CartIcon" className="icon"/>
                <div className="cart-count">{carts.length}</div>
            </div>
            <div ref = {SideBarRef} className= {`sideBar ${isToggle?expand:shrink}`} >
                <div className = "side-bar-header">meal box</div>
                <div className  = "cart-items">
                    {carts.length === 0 ?
                    ( <div className="empty-cart"> Empty Cart</div>
                    ):(carts.map(({product,quantity}) => (
                        <div className = "card" key = {product.id}>
                            <div className = "card-body">
                                <div className = "card-row">
                                    <div className = "card-title">{product.name}</div>
                                    <div className = "operator">
                                        <div className = "incrementor" onClick = {()=> addProductToCart(product)}>+</div>
                                        <div className = "decrementor" onClick = {() => decreaseProductFromCart(product.id)}>-</div>
                                    </div>
                                    <img src = {deleteButton} alt = "deletebutton" className = "card-remove" 
                                    onClick = {() => removeProductFromCart(product.id)}/>
                                </div>
                                <div className="card-row">
                                    <div className = "card-title">Total Quantity ({quantity}) - {product.price * quantity}</div>
                                </div>
                            </div>
                        </div>
                    )))
                    }
                </div>
                {carts.length !== 0 && (
                    <>
                    <hr></hr>
                    <div className="total">Total = {sum}</div>
                    <div className="proceed-clear">
                        <div className = "proceed-to-checkout" onClick = {()=>(setTrigger(true), setToggle(false))}>Confirm</div>
                        <div className = "clear-button" onClick = {()=> clearCart()}> Clear Cart</div>
                    </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Cart;