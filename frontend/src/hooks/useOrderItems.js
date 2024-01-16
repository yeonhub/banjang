import { useDispatch, useSelector } from "react-redux";
import { decrementStack, getBJitem, incrementStack } from "../store/modules/BJitemSlice";
import { useEffect } from "react";

export const useOrderItems = () => {
    const dispatch = useDispatch();
    const BJitem = useSelector((state) => state.BJitemReducer.BJitem);
    const loading = useSelector((state) => state.BJitemReducer.loading);

    useEffect(() => {
        dispatch(getBJitem());
    }, [dispatch]);

    const handleIncrement = id => dispatch(incrementStack(id));
    const handleDecrement = id => dispatch(decrementStack(id));

    return { BJitem, loading, handleIncrement, handleDecrement };
}