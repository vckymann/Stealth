import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    productsFetched: false,
    products: [],
    filteredProducts: [],
    error: null,
    currentPage: "",
    selectedProduct: null,
    similarProducts: [],
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        fetchProductsSuccess: (state, action) => {
            state.loading = false;
            state.productsFetched = true;
            state.products = action.payload;
            state.filteredProducts = action.payload;
            state.error = null;
        },
        fetchProductsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        applyFilter: (state, action) => {
            state.filterBy = action.payload;
            if(action.payload) {
                state.currentPage = action.payload.page;
                state.filteredProducts = state.products.filter((product) => {
                    return product["category_id"] === action.payload.id
                })
            } else {
                state.filteredProducts = state.products
            }
        },
        applySort: (state, action) => {
            state.sortBy = action.payload;
            if(action.payload === "newest") {            
                state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
                    return b.id - a.id;
                })
            } else if (action.payload === "oldest") {                
                state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
                    return a.id - b.id;
                })
            }

        },
        getProductDetails: (state, action) => {
           const productId = action.payload.productId;
           state.selectedProduct = state.products.find((product) => product.id === productId);

           state.similarProducts = state.products
               .filter((product) => product.category_id === action.payload.category_Id && product.id !== productId)
               .slice(0, 4);
        },
        searchProducts: (state, action) => {
          state.filteredProducts = action.payload; 
          state.currentPage = ""; 
        },
        refreshProducts: (state) => {
            state.filteredProducts = state.products;
            state.currentPage = "All";
        }
    }
});

export const { fetchProductsSuccess, fetchProductsFailure, applyFilter, applySort, getProductDetails, similarFilter, refreshProducts, searchProducts } = productSlice.actions;

export default productSlice.reducer