import { useDispatch } from "react-redux";
import { incrementStack, decrementStack } from "../store/modules/BJitemSlice";

export const useItemQuantity = () => {
    const dispatch = useDispatch();

    const handleIncrement = (id) => {
        dispatch(incrementStack(id))
    };
    
    const handleDecrement = (id) => {
        dispatch(decrementStack(id))
    };
    
    return { handleIncrement, handleDecrement };
}