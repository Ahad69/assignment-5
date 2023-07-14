/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { apiSlice } from "../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addBooks: builder.mutation({
      query: (data) => ({
        url: `/book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    getBooks: builder.query({
      query: () => `/books`,
    }),
    getBookById: builder.query({
      query: (id) => `/book/${id}`,
    }),
  }),
});

export const { useAddBooksMutation, useGetBooksQuery, useGetBookByIdQuery } =
  bookApi;
