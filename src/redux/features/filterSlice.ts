import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilterType } from "../../Interfaces/globalTypes";

const initialState: IFilterType = {
  year: "",
  genre: "",
  searchText: "",
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
    addSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { publicationYear, changeGenre, addSearchText } =
  filterSlice.actions;
export default filterSlice.reducer;
