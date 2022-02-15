import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item to basket....
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>₹</small>
    <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    // creates an array of size 5
                    .fill()
                    // fills it with empty values
                    .map((_) =>(
                        // it maps through 5 times it doesn't care what value is(_) 
                        <p>⭐</p>
                        // just gives star 5 times
                    ) )
                }
            </div>
            </div>
            
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
