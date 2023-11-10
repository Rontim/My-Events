import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setAuth, logout } from "@/redux/feature/user/userSlice";
import { Mutex } from "async-mutex";

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_DJANGO_BASE_URL,
    credentials: "include",
});

const baseQueryWithReauthorization = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshResult = await baseQuery(
                    "/auth/jwt/refresh/",
                    api,
                    extraOptions
                );
                if (refreshResult.data) {
                    api.dispatch(setAuth());

                    result = await baseQuery(args, api, extraOptions);
                } else {
                    api.dispatch(logout());
                }
            } finally {
                release();
            }
        }
    }
    return result;
};


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauthorization,
    // eslint-disable-next-line no-unused-vars
    endpoints: builder => ({}),
});