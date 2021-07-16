import React, {useState, useContext} from 'react';
import {NavLink} from "react-router-dom";
import Cart from "./Cart/Cart";
import Context from './Store/Content';
import Confirm from './Confirm/Confirm';

const Links = () => {
    const [isToggle, setToggle] = useState(false);
    const [isTrigger, setTrigger]  = useState(false);
    const context = useContext(Context);
    return (
        <>
        <div className = "navBar">
            <NavLink className = "navClass" exact activeClassName = "active-class" to = "/"> MENU </NavLink>
            <NavLink className = "navClass" exact activeClassName = "active-class" to = "/about"> OUR STORY </NavLink>
            <Cart isToggle={isToggle} setToggle={setToggle} isTrigger= {isTrigger} setTrigger = {setTrigger} carts ={context.carts} sum = {context.sum} addProductToCart={context.addProductToCart} 
            removeProductFromCart = {context.removeProductFromCart} clearCart= {context.clearCart} 
            decreaseProductFromCart= {context.decreaseProductFromCart} />
            <div className = {isToggle?"overlay":""}></div>
            {isTrigger?(
                <div className = "overlay"></div>
            ):("")

            }
            {isTrigger?(
                <Confirm setTrigger = {setTrigger} clearCart= {context.clearCart}/>
            ):("")

            }
        </div>    
        </>    
    )
}

export default Links;