"use client"

import {configureStore} from "@reduxjs/toolkit";
import userReducer from '@/redux/feature/user/userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})