import React, {useState, useContext} from "react";
import data from "./Items_data";
import "./Items.css"
import Button from 'react-bootstrap/Button';
import Context from "../Store/Content";

const Items = () => {

    const [container] = useState(data);
    const context = useContext(Context);

    // useEffect(() => {
    //     console.log(context);
    // }, [context]);


    const addProductToCart = (props) => context.addProductToCart(props);

    return (
        <>
            <div className = "main-item-div">
                <div className = "food-category"> Food Category </div>
                <hr style={{width:`80%`, height: `30px` , borderWidth: `4px`, textAlign:`center`}}/>
                {container.map((cvalue, idx) => {
                    return (
                        <div className = "item" key = {cvalue.id}>
                            <div className = "text">{cvalue.name} <span>{cvalue.price}</span></div>
                            {/* <div className = "btn-btn">Add To Meal</div>  */}
                            <Button variant="success" size="sm" onClick={()=>addProductToCart({...cvalue})}>Add To Meal</Button>{' '}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Items;