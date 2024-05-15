import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

import './PlaceOrder.css';

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input required type="text" placeholder='First Name' />
                    <input required type="text" placeholder='Last Name' />
                </div>
                <input className='email' required type="email" placeholder='Email address' />
                <input className='street' required type="text" placeholder='Street' />
                <div className="multi-fields">
                    <input required type="text" placeholder='City' />
                    <input required type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input required type="text" placeholder='Zip code' />
                    <input required type="text" placeholder='Country' />
                </div>
                <input className='phone' required type="text" placeholder='Phone' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button type='submit'>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;