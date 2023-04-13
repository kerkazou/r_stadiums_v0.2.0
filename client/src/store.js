import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/counterSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
