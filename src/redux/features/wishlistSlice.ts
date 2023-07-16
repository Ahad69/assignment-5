import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MyBook } from "../../Interfaces/globalTypes";

export interface IWishType {
  wishlist: MyBook[];
}

const initialState: IWishType = {
  wishlist: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWish: (state, action: PayloadAction<MyBook>) => {
      state.wishlist.push({ ...action.payload });
    },
  },
});

export const { addToWish } = wishListSlice.actions;
export default wishListSlice.reducer;
