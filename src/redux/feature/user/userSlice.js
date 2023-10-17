"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loaduser = createAsyncThunk("user/load", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/users/me/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    });

    const data = await res.json();

    if (res.status === 200) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    const body = JSON.stringify({ email, password });

    try {
      const res = await fetch("http://127.0.0.1:8000/auth/jwt/create/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });

      const data = await res.json();

      if (res.status === 200) {
        const token = data.access;
        localStorage.setItem("access", token);

        console.log(data);

        const { dispatch } = thunkAPI;

        dispatch(loaduser());

        return res.status;
      } else {
        console.log(data);
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "user/verify",
  async (_, thunkAPI) => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("access")) {
        const body = JSON.stringify({ token: localStorage.getItem("access") });

        try {
          const res = await fetch(`http://127.0.0.1:8000/auth/jwt/verify/`, {
            method: "POST",
            body,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });

          if (res.status === 200) {
            const { dispatch } = thunkAPI;
            dispatch(loaduser());
          }
        } catch (err) {
          console.log(err.response.data);
          return thunkAPI.rejectWithValue(err.response.data);
        }
      } else {
        return thunkAPI.rejectWithValue("No access token");
      }
    }
  }
);

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      if (typeof window !== "undefined") {
        localStorage.clear();
        state.isAuthenticated = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.status = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loaduser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loaduser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loaduser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
