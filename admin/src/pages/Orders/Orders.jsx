/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import './Orders.css';

const Orders = ({ url }) => {
    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        const response = await axios.get(url + '/api/order/list');

        if (response.data.success) {
            setOrders(response.data.data);
            console.log(response.data.data);
        }else {
            toast.error('Error');
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, []);

    return (
        <div>
            Order
        </div>
    );
};

export default Orders;