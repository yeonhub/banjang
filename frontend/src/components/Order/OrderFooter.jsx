import React from 'react';
import { useSelector } from 'react-redux';
import { useOrder } from '../../hooks/useOrder';
import { OrderFooterUI } from './OrderFooterUI';

const OrderFooter = () => {
    const totalQuantity = useSelector((state) => state.BJitemReducer.totalQuantity);
    const totalPrice = useSelector((state) => state.BJitemReducer.totalPrice);
    const isOrderLoading = useSelector((state) => state.BJitemReducer.isOrderLoading);

    const handleOrder = useOrder();

    return (
        <>
            <OrderFooterUI totalQuantity={totalQuantity} totalPrice={totalPrice} isOrderLoading={isOrderLoading} handleOrder={handleOrder} />
        </>
    );
};

export default OrderFooter;
