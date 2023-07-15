/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface IUserState {
  user: {
    email: null | string;
    firstName: string | undefined;
    lastName: string | undefined;
  };
  isLoading: boolean;
  isError: boolean;
  error: null | string;
}
const initialState: IUserState = {
  user: {
    email: null,
    firstName: "",
    lastName: "",
  },
  isLoading: false,
  isError: false,
  error: null,
};

interface ICredential {
  email: string;
  password: string;
}

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password }: ICredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      console.log(action.payload);
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error.message!;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.user.email = action.payload;
        state.user.firstName;
        state.user.lastName;
      });
  },
});

export const { addUserInfo } = userSlice.actions;

export default userSlice.reducer;
