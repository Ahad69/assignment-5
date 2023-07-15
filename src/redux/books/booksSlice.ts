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
      invalidatesTags: ["books"],
    }),
    getBooks: builder.query({
      query: () => `/books`,
      providesTags: ["books"],
    }),
    getBookById: builder.query({
      query: (id) => `/book/${id}`,
      providesTags: ["books"],
    }),
    patchBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useAddBooksMutation,
  useGetBooksQuery,
  useGetBookByIdQuery,
  usePatchBookMutation,
} = bookApi;
