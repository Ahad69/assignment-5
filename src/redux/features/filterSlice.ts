import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilterType } from "../../Interfaces/globalTypes";

const initialState: IFilterType = {
  year: "",
  genre: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    publicationYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    changeGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
  },
});

export const { publicationYear, changeGenre } = filterSlice.actions;
export default filterSlice.reducer;
