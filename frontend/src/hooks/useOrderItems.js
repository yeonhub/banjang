import { useDispatch, useSelector } from "react-redux";
import { decrementStack, getBJitem, getBJitemASC, incrementStack } from "../store/modules/BJitemSlice";
import { useEffect } from "react";

export const useOrderItems = () => {
    const dispatch = useDispatch();
    const BJitem = useSelector((state) => state.BJitemReducer.BJitem);
    const loading = useSelector((state) => state.BJitemReducer.loading);

    // order 컴포넌트 렌더링 시 DB에서 item get
    useEffect(() => {
        // dispatch(getBJitem());
        dispatch(getBJitemASC());
    }, [dispatch]);

    // 수량 증가 함수 호출
    const handleIncrement = (id) => {
        dispatch(incrementStack(id))
    };
    
    // 수량 감소 함수 호출
    const handleDecrement = (id) => {
        dispatch(decrementStack(id))
    };

    return { BJitem, loading, handleIncrement, handleDecrement };
}