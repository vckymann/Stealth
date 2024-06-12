import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import authSlice from "./slices/authslice";
import productSlice from "./slices/productslice";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
 auth: authSlice,
 products: productSlice,
 cart:cartSlice,
});

const persistConfig = {
 key: 'root',
 version: 1,
 storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
