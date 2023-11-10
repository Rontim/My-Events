import { apiSlice } from "../services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({
        email,
        username,
        first_name,
        last_name,
        password,
        re_password,
        address,
        contacts,
      }) => ({
        url: "/api/users/",
        method: "POST",
        body: {
          email,
          username,
          first_name,
          last_name,
          password,
          re_password,
          address,
          contacts,
        },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/jwt/create/",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),
    loaduser: builder.query({
      query: () => "/api/users/me/",
    }),
    verify: builder.mutation({
      query: () => ({
        url: "/auth/jwt/verify/",
        method: "POST",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout/",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useVerifyMutation,
  useLoaduserQuery,
} = authApiSlice;
