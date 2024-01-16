import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { placeOrder } from '../store/modules/BJitemSlice';

export const useOrder = () => {
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

    return handleOrder;
}