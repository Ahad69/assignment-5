import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IReadingType, MyReadingBook } from "../../Interfaces/globalTypes";

const initialState: IReadingType = {
  myReadingsList: [],
};

const myReadingSlice = createSlice({
  name: "myReadingsList",
  initialState,
  reducers: {
    addToReadList: (state, action: PayloadAction<MyReadingBook>) => {
      const isExist = state.myReadingsList.find(
        (a) => a._id == action.payload._id
      );
      if (isExist) {
        return;
      } else {
        state.myReadingsList.push({ ...action.payload });
      }
    },
  },
});

export const { addToReadList } = myReadingSlice.actions;
export default myReadingSlice.reducer;
