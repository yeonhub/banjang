import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { placeOrder } from '../store/modules/BJitemSlice';

export const useOrder = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 주문하기 성공/실패 비동기 page navigate
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

    return handleOrder;
}