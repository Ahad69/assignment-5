import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IFilterType {
  loading: boolean;
  isError: boolean;
}
const initialState: IFilterType = {
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
