"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/feature/user/userSlice";
import eventReducer from "@/redux/feature/events/eventSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    event: eventReducer,
  },
});
