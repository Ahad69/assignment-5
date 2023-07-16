import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filterSlice";
import { apiSlice } from "./api/apiSlice";
import commonOptions from "./features/commonOptionsSlice";
import userSlice from "./users/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import wishlistSlice from "./features/wishlistSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, wishlistSlice);

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    wishlist: persistedReducer,
    commonOptions: commonOptions,
    users: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
