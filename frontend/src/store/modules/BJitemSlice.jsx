import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState ={
    loading : false,
    BJitem : []
}

export const getBJitem = createAsyncThunk(
    'BJitem/getBJitem',
    async()=>{
        const res = await axios.get(`http://localhost:3001/items`)
        return res.data
    }
)

export const BJitemSlice = createSlice({
    name: 'BJitem',
    initialState,
    reducers: {

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
            });
    }
})

export default BJitemSlice.reducer