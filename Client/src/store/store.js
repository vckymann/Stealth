import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import authSlice from "./slices/authslice";
import productSlice from "./slices/productslice";
import cartSlice from "./slices/cartSlice";

// Combine your reducers
const rootReducer = combineReducers({
 auth: authSlice,
 products: productSlice,
 cart:cartSlice,
});

// Configure persistReducer
const persistConfig = {
 key: 'root',
 version: 1,
 storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
