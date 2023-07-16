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
        state.myReadingsList.push({ ...action.payload, status: "to-read" });
      }
    },
    removeFromMyReadingList: (state, action: PayloadAction<MyReadingBook>) => {
      state.myReadingsList = state.myReadingsList.filter(
        (a) => a._id !== action.payload._id
      );
    },
    updateBookReadStatus: (state, action: PayloadAction<MyReadingBook>) => {
      const isExist = state.myReadingsList.find(
        (a) => a._id == action.payload._id
      );
      if (isExist) {
        if (isExist.status == "to-read") {
          isExist.status = "reading";
        } else if (isExist.status == "reading") {
          isExist.status = "finished";
        } else if (isExist.status == "finished") {
          return;
        }
      }
    },
  },
});

export const { addToReadList, removeFromMyReadingList, updateBookReadStatus } =
  myReadingSlice.actions;
export default myReadingSlice.reducer;
