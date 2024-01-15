import React from 'react';
import '../assets/css/BJitemScss/OrderScss.scss'
import OrderLoading from '../components/Order/OrderLoading';

const Order = () => {
    return (
        <>
            <div id='order'>
                <OrderLoading />
            </div>
        </>
    );
};

export default Order;