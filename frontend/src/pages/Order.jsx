import React from 'react';
import '../assets/css/BJitemScss/OrderScss.scss'
import OrderLoading from '../components/Order/OrderLoading';
import { useOrderItems } from '../hooks/useOrderItems';
import { OrderItem } from '../components/Order/OrderItem';

const Order = () => {
    const { BJitem, loading, handleIncrement, handleDecrement } = useOrderItems();
    return (
        <>
            <div id='order'>
                <ul className='orderItemUl'>
                    {
                        BJitem.map((item) => (
                            <OrderItem
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
