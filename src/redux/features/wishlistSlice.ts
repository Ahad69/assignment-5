import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWishType, MyBook } from "../../Interfaces/globalTypes";

const initialState: IWishType = {
  wishlist: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWish: (state, action: PayloadAction<MyBook>) => {
      const isExist = state.wishlist.find((a) => a._id == action.payload._id);
      if (isExist) {
        console.log(isExist);
        return;
      } else {
        state.wishlist.push({ ...action.payload });
      }
    },
    removeFromWishList: (state, action: PayloadAction<MyBook>) => {
      state.wishlist = state.wishlist.filter(
        (a) => a._id !== action.payload._id
      );
    },
  },
});

export const { addToWish, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
