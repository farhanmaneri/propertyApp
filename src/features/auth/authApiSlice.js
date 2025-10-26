import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/users/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    signup: builder.mutation({
      query: (newUser) => ({
        url: "/api/users/register",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApiSlice;
