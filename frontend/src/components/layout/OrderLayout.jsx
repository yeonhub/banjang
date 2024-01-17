import React from 'react';
import { Outlet } from 'react-router-dom';
import OrderHeader from '../Order/OrderHeader';
import OrderFooter from '../Order/OrderFooter';
import '../../assets/css/BJitemScss/OrderLayoutScss.scss'

const OrderLayout = () => {
    return (
        <>
            <div id='orderLayout'>
                
                {/* Header, Footer 고정 */}
                <OrderHeader />
                <Outlet />
                <OrderFooter />
            </div>
        </>
    );
};

export default OrderLayout;