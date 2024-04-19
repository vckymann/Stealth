import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    cartItemsFetched: false,
    cartItems: [],
    count: 0,
    totalPrice: 0,
    error: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        fetchCartItemsSuccess: (state, action) => {
            state.loading = false
            state.cartItems = action.payload
            state.cartItemsFetched = true;
            state.count = action.payload.length
            state.error = null
        },
        fetchCartItemsFailure: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        updateCartItems: (state, action) => {
            const { productId, quantity } = action.payload;
            const existingItem = state.cartItems.findIndex((item) => item.product_id === productId);
            if (existingItem !== -1) {
              state.cartItems[existingItem].quantity = quantity;
              state.cartItems[existingItem].total = (quantity * state.cartItems[existingItem].price).toFixed(2);
            }
          },
        removeCartItems: (state, action) => {
            const productId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.product_id !== productId);
            state.count = state.cartItems.length
        },
        refreshCartItems: (state) => {
            state.cartItemsFetched = false;
        },
        resetCart: (state) => {
            state.cartItems = []
            state.cartItemsFetched = false
            state.count = 0
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload
        }
    }
})

export const { fetchCartItemsSuccess, fetchCartItemsFailure, updateCartItems, removeCartItems, refreshCartItems, resetCart, setTotalPrice} = cartSlice.actions;
export default cartSlice.reducer