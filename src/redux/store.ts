import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filterSlice";
import { apiSlice } from "./api/apiSlice";
import commonOptions from "./features/commonOptionsSlice";
import userSlice from "./users/userSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    commonOptions: commonOptions,
    users: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
