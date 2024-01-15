import React from 'react';
import { Outlet } from 'react-router-dom';
import OrderHeader from '../Order/OrderHeader';
import OrderFooter from '../Order/OrderFooter';

const OrderLayout = () => {
    return (
        <>
            <OrderHeader />
            <Outlet />
            <OrderFooter />
        </>
    );
};

export default OrderLayout;