import React from "react";
import "./Confirm.css";
import deleteButton from "../svg/delete-button.png";

const Confirm = ({setTrigger, clearCart}) => {
    return (
        <>
            <div className = "pop-up-main">
                <div className = "pop-up">
                    <img src = {deleteButton} alt = "delete" className = "delete" onClick = {()=>(setTrigger(false),clearCart())}/>
                    <div className="order">Ordered Successfully</div>
                </div>
            </div>
        </>
    )
}

export default Confirm;