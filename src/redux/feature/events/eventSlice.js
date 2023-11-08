"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createEvent } from "./thunk/eventThunk";

export const eventsList = createAsyncThunk(
  "events/list",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_BASE_URL}/events/`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await res.json();
      if (res.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
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
      .addCase(createEvent.pending, (state) => {
        state.loading = true;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
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
