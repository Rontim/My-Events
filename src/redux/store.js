"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/feature/user/userSlice";
import eventReducer from "@/redux/feature/events/eventSlice";
import { apiSlice } from "./services/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    event: eventReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
