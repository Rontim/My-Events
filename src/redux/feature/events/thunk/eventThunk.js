import { createAsyncThunk } from "@reduxjs/toolkit";

export const createEvent = createAsyncThunk(
  "event/create",
  async (
    { organizer, title, category, capacity, start_date, end_date, images },
    thunkAPI
  ) => {
    const body = JSON.stringify({
      organizer,
      title,
      category,
      capacity,
      start_date,
      end_date,
      images,
    });
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_BASE_URL}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });

      if (res.status === 201) {
        return await res.json();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
