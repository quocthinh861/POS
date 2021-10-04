import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeToCart} from '../../Slices/itemSlice'
function Item({value}) {

    const dispatch = useDispatch();


    return (
        <div className="item">
            <img src={value.image}/>
                <div>
                    <span>{value.name}</span>
                    <div className="qty">
                        <span className="minor" onClick={() => dispatch(decreaseQuantity(value.id))}>-</span><span> {value.quantity} </span><span className="add" onClick={() => dispatch(increaseQuantity(value.id))}>+</span>
                    </div>
                    <div><span className="option detail-option">View Detail</span> | <span className="option delete-option" onClick={() => dispatch(removeToCart(value.id))}>Delete</span></div>
                </div>
            <span className="price">${(value.price * value.quantity).toFixed(2)}</span>
        </div>
    )
}

export default Item
