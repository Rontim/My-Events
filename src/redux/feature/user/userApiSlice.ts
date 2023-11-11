import { apiSlice } from "@/redux/services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loadUser: builder.query({
      query: () => "/api/users/me/",
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
      transformResponse: (response: any) => response.detail,
      transformErrorResponse: (response: any) => response.detail,
    }),
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
  useLoadUserQuery,
} = authApiSlice;
