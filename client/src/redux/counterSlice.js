import { createSlice } from '@reduxjs/toolkit';

const initialState =
    (localStorage.getItem('token') && localStorage.getItem('user') && localStorage.getItem('role')) ? { IsLogin: true, user: localStorage.getItem('user'), role: localStorage.getItem('role') } : { IsLogin: false, user: null, role: null };

const authReducer = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        LOGIN: (state, action) => {
            state.IsLogin = true;
            state.user = action.payload.user;
            state.role = action.payload.role;
        },
        LOGOUT: state => {
            state.IsLogin = false;
            state.user = null;
            state.role = null;
        },
    },
});

export const { LOGIN, LOGOUT } = authReducer.actions;
export default authReducer.reducer;
