import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { placeOrder } from '../../store/modules/BJitemSlice';

const OrderFooter = () => {
    const totalQuantity = useSelector((state) => state.BJitemReducer.totalQuantity);
    const totalPrice = useSelector((state) => state.BJitemReducer.totalPrice);
    const isOrderLoading = useSelector((state) => state.BJitemReducer.isOrderLoading);
    const isOrder = useSelector((state) => state.BJitemReducer.isOrder);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOrder = async () => {
        const actionResult = await dispatch(placeOrder());
        if (actionResult.payload.success) {
            navigate('/complete');
        } else {
            navigate('/error');
        }
        setTimeout(() => {
            navigate('/order');
        }, 3000);
    };
    

    return (
        <>
            <div className='orderFooterDiv'>
                <div className='total'>
                    <div className='totalCount'>
                        <span>총 수량 : </span>
                        <span>{totalQuantity}</span>
                        <span>개</span>
                    </div>
                    <div className='totalPrice'>
                        <span>총 가격 : </span>
                        <span>{Number(totalPrice).toLocaleString()}</span>
                        <span>원</span>
                    </div>
                </div>
                <div
                    className='orderBtn'
                    style={totalQuantity > 0 ? (isOrderLoading ? { background: '#C1C1C1' } : { background: 'black' }) : null}
                    onClick={totalQuantity > 0 ? handleOrder : null}
                >
                    <span
                        className='orderBtnSpan'
                    >
                        {isOrderLoading ? '주문 중...' : '주문하기'}
                    </span>
                </div>
            </div>
        </>
    );
};

export default OrderFooter;
