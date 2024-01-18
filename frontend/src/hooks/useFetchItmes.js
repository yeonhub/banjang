import { useDispatch, useSelector } from "react-redux";
import { getBJitemASC } from "../store/modules/BJitemSlice";
import { useEffect } from "react";

export const useFetchItems = () => {
    const dispatch = useDispatch();
    const BJitem = useSelector((state) => state.BJitemReducer.BJitem);
    const loading = useSelector((state) => state.BJitemReducer.loading);

    useEffect(() => {
        dispatch(getBJitemASC());
    }, [dispatch]);

    return { BJitem, loading };
}