import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';

import './PlaceOrder.css';

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    useEffect(()=>{
        console.log(data);
    }
    ,[data]);

    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input
                        required
                        type="text"
                        name='firstName'
                        onChange={onChangeHandler}
                        value={data.firstName}
                        placeholder='First Name'
                    />
                    <input
                        required
                        type="text"
                        name='lastName'
                        onChange={onChangeHandler}
                        value={data.lastName}
                        placeholder='Last Name'
                    />
                </div>
                <input
                    className='email'
                    required
                    type="email"
                    name='email'
                    onChange={onChangeHandler}
                    value={data.email}
                    placeholder='Email address'
                />
                <input
                    className='street'
                    required
                    type="text"
                    name='street'
                    onChange={onChangeHandler}
                    value={data.street}
                    placeholder='Street'
                />
                <div className="multi-fields">
                    <input
                        required
                        type="text"
                        name='city'
                        onChange={onChangeHandler}
                        value={data.city}
                        placeholder='City'
                    />
                    <input
                        required
                        type="text"
                        name='state'
                        onChange={onChangeHandler}
                        value={data.state}
                        placeholder='State'
                    />
                </div>
                <div className="multi-fields">
                    <input
                        required
                        type="text"
                        name='zipcode'
                        onChange={onChangeHandler}
                        value={data.zipcode}
                        placeholder='Zip code'
                    />
                    <input
                        required
                        type="text"
                        name='country'
                        onChange={onChangeHandler}
                        value={data.country}
                        placeholder='Country'
                    />
                </div>
                <input
                    className='phone'
                    required
                    type="text"
                    name='phone'
                    onChange={onChangeHandler}
                    value={data.phone}
                    placeholder='Phone'
                />
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