import React from 'react';
import '../assets/css/BJitemScss/OrderScss.scss'
import OrderLoading from '../components/Order/OrderLoading';
import { OrderItemLI } from '../components/Order/OrderItemLI';
import { useFetchItems } from '../hooks/useFetchItmes';
import { useItemQuantity } from '../hooks/useItemQuantity';

const Order = () => {

    // item get하는 hook 호출 및 data 받아오기
    const { BJitem, loading } = useFetchItems();
    const { handleIncrement, handleDecrement } = useItemQuantity();

    return (
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
    );
};

export default Order;
