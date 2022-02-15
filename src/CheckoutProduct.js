import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(id, title, image, price, rating);
    const removeFromBasket = () => {
        //remove item from basket....
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>                  
                </p>
                <div className="checkoutProduct__rating">
                {
                    Array(rating)
                    // creates an array of size 5
                    .fill()
                    // fills it with empty values
                    .map((_, i) =>(
                        // it maps through 5 times it doesn't care what value is(_) 
                        <p>⭐</p>
                        // just gives star 5 times
                    ) )
                }
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
                </div>         
        </div>
    )
}

export default CheckoutProduct
