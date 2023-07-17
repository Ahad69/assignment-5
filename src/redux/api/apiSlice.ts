import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-bakcend.vercel.app",
  }),
  tagTypes: ["review", "books"],
  endpoints: () => ({}),
});
