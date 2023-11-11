"use client";

import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./thunk/userThunk";

interface UserState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any;
  error: any;
  status: any;
}

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  error: null,
  status: "idle",
} as UserState;


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // .addCase(login.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // })
    // .addCase(login.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isAuthenticated = true;
    //   state.status = action.payload;
    // })
    // .addCase(login.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // })
    // .addCase(loaduser.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(loaduser.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload;
    // })
    // .addCase(loaduser.rejected, (state) => {
    //   state.isLoading = false;
    // })
    // .addCase(checkAuth.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(checkAuth.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isAuthenticated = true;
    // })
    // .addCase(checkAuth.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isAuthenticated = false;
    // });
  },
});

export const { setAuth, logout, finishInitialLoad, setUser } = userSlice.actions;
export default userSlice.reducer;
