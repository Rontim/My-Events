"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const eventsList = createAsyncThunk(
  "events/list",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:8000/events/", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json();
      if (res.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  },
);

const initialState = {
  loading: false,
  events: null,
  myEvents: null,
  error: "",
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(eventsList.pending, (state) => {
        state.loading = true;
      })
      .addCase(eventsList.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(eventsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default eventSlice.reducer;
