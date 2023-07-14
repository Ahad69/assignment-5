import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IFilterType {
  year: number;
  genre: string | null;
}
const initialState: IFilterType = {
  year: 2023,
  genre: null,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    publicationYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    changeGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
  },
});

export const { publicationYear, changeGenre } = filterSlice.actions;
export default filterSlice.reducer;
