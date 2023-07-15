/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { apiSlice } from "../api/apiSlice";

const reviewSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    getReviews: builder.query({
      query: (id) => `reviews/${id}`,
      providesTags: ["review"],
    }),
  }),
});

export const { usePostReviewMutation, useGetReviewsQuery } = reviewSlice;
