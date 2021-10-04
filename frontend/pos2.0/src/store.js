import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './Slices/itemSlice';
export default configureStore({
    reducer: {
        item: itemSlice
    }
})