import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './Slices/itemSlice';
import userSlice from './Slices/userSlice';


export default configureStore({
    reducer: {
        item: itemSlice,
        user: userSlice,
    }
})