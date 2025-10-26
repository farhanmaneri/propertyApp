import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../auth/authSlice"; // ✅ Correct import

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.userInfo?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Plot"],
  endpoints: () => ({}),
});
