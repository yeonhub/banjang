import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBJitem } from '../store/modules/BJitemSlice';
import '../assets/css/BJitemScss/OrderScss.scss'
import OrderLoading from '../components/Order/OrderLoading';

const Order = () => {
    const dispatch = useDispatch();
    const BJitem = useSelector((state) => state.BJitemReducer.BJitem);
    const loading = useSelector((state) => state.BJitemReducer.loading);

    useEffect(() => {
        dispatch(getBJitem());
    }, [dispatch]);

    console.log(BJitem);
    return (
        <>
            <div id='order'>
                <ul className='orderItemUl'>
                    {
                        BJitem.map((item) => (
                            <li className='orderItemLi' key={item.id}>
                                <div className='itemImg'></div>
                                <div className='itemInfo'>
                                    <div className='itemNameDiv'>
                                        <h2 className='itemName'>{item.name}</h2>
                                        {
                                            item.event ? <div className='itemEvent'>이벤트</div> : null
                                        }

                                    </div>
                                    <div className='itemPriceDiv'>
                                        <div className='itemCount'>
                                            <span>- </span>
                                            <span>5</span>
                                            <span> +</span>
                                        </div>
                                        <span className='itemPrice'>{item.price}원</span>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                {loading && <OrderLoading />}
            </div>
        </>
    );
};

export default Order;
