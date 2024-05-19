/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import './List.css';

const List = ({ url }) => {

    const [list, setList] = useState([]);

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        console.log(response.data);
        if (response.data.success) {
            setList(response.data.data);
        }
        else {
            toast.error('Error');
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    return;
};

export default List;