import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    BJitem: [],
    // 수량 1이상 상품 담는 배열
    orderItems: [],
    isOrder: false,
    isOrderLoading: false,
    totalQuantity: 0,
    totalPrice: 0
}

// items get
export const getBJitem = createAsyncThunk(
    'BJitem/getBJitem',
    async () => {
        const res = await axios.get(`http://localhost:3001/items`)
        const data = res.data.map(item => ({ ...item, stack: 0 }))
        return data
    }
)
// 주문하기
export const placeOrder = createAsyncThunk(
    'BJitem/placeOrder',
    async (_, { dispatch, getState }) => {
        dispatch(addOrderItems());
        const { orderItems } = getState().BJitemReducer;
        await new Promise(resolve => setTimeout(resolve, 2000));
        if (orderItems.length > 0) {
            return { success: true, orderItems };
        } else {
            return { success: false };
        }
    }
);

export const BJitemSlice = createSlice({
    name: 'BJitem',
    initialState,
    reducers: {
        // stack 증가
        incrementStack: (state, action) => {
            const item = state.BJitem.find(item => item.id === action.payload);
            if (item && item.stack < 1000) {
                item.stack += 1;
                state.totalQuantity += 1;
                state.totalPrice += item.price;
            }
        },
        // stack 감소
        decrementStack: (state, action) => {
            const item = state.BJitem.find(item => item.id === action.payload);
            if (item && item.stack > 0) {
                item.stack -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= item.price;
            }
        },
        // stack 1이상 아이템들 orderItems에 추가
        addOrderItems: (state) => {
            state.orderItems = state.BJitem.filter(item => item.stack > 0);
        },

    },
    extraReducers: (builder) => {
        builder
            // item get 로딩중
            .addCase(getBJitem.pending, (state) => {
                state.loading = true;
            })
            // item get 성공
            .addCase(getBJitem.fulfilled, (state, action) => {
                state.BJitem = action.payload;
                state.loading = false;
            })
            // item get 실패
            .addCase(getBJitem.rejected, (state) => {
                state.loading = false;
            })
            // order 로딩중
            .addCase(placeOrder.pending, (state) => {
                console.log('- 주문 중 -');
                state.isOrderLoading = true;
            })
            // order 성공
            .addCase(placeOrder.fulfilled, (state, action) => {
                console.log('- 주문 성공 -');
                console.log('주문 상품 : ' + JSON.stringify(state.orderItems, null, 2));

                state.isOrderLoading = false;
                if (action.payload.success) {
                    state.isOrder = true;
                    state.orderItems = [];
                    state.totalQuantity = 0;
                    state.totalPrice = 0;
                    state.BJitem.forEach(item => item.stack = 0);
                } else {
                    state.isOrder = false;
                }
            })
            // order 실패
            .addCase(placeOrder.rejected, (state) => {
                console.log('- 주문 실패 -');
                state.isOrderLoading = false;
                state.isOrder = false;
            });

    }
})

export const { incrementStack, decrementStack, addOrderItems } = BJitemSlice.actions;
export default BJitemSlice.reducer