import React from 'react';
import '../assets/css/BJitemScss/OrderScss.scss'
import OrderLoading from '../components/Order/OrderLoading';
import { useOrderItems } from '../hooks/useOrderItems';
import { OrderItemLI } from '../components/Order/OrderItemLI';

const Order = () => {
    
    // item get하는 hook 호출 및 data 받아오기
    const { BJitem, loading, handleIncrement, handleDecrement } = useOrderItems();
    return (
        <>
            <div id='order'>
                <ul className='orderItemUl'>
                    {
                        BJitem.map((item) => (
                            <OrderItemLI
                                key={item.id}
                                item={item}
                                onIncrement={id => handleIncrement(id)}
                                onDecrement={id => handleDecrement(id)}
                            />
                        ))
                    }
                </ul>
                {loading && <OrderLoading />}
            </div>
        </>
    );
};

export default Order;
