import React from 'react'
import './Subtotal.css'
// import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from '../reducer';
import { useNavigate } from "react-router-dom";

export default function Subtotal() {
    const history = useNavigate();
    const [{ basket, user }, dispach] = useStateValue();
    const val = getBasketTotal(basket);

    return (
        <div className='subtotal'>

            <div>
                <p>
                    Subtotal ({basket?.length} items): <strong>{val}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
            </div>

            <button onClick={e => history('/payment')}>Procedd to checkout</button >
        </div>
    )
}
