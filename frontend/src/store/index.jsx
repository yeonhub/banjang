import { configureStore } from '@reduxjs/toolkit'
import BJitemReducer from './modules/BJitemSlice'

export const store = configureStore({
    reducer : {    
        BJitemReducer
    }
})