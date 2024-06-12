import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userData:null,
    status: false,
    userId: null,
    cartId: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload
        },
        logout: (state) => {
            state.userData = null
            state.status = false;
            state.userId = null;
            state.cartId = null
        },
        userInfo: (state, action) => {
            if(action.payload.cartId === null) {
                state.userId = action.payload.userId
            } else {
                state.userId = action.payload.userId
                state.cartId = action.payload.cartId
            }
        }
    }
})

export const { login, logout, userInfo } = authSlice.actions;

export default authSlice.reducer;