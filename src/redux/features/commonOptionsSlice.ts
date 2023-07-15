import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILoadAndErrorType } from "../../Interfaces/globalTypes";

const initialState: ILoadAndErrorType = {
  loading: false,
  isError: false,
};

export const commonOptions = createSlice({
  name: "common",
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    isErrorStatus: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
});

export const { isLoading, isErrorStatus } = commonOptions.actions;
export default commonOptions.reducer;
