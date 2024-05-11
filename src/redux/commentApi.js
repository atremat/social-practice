import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://662e4c31a7dda1fa378c947d.mockapi.io";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query(comment) {
        return {
          url: API_ENDPOINT,
          method: "POST",
          body: comment,
        };
      },
      invalidatesTags: ["Comments"],
    }),
    updateCommentCount: builder.mutation({
      query({id, ...data}) {
        return {
          url: `${API_ENDPOINT}/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation, useUpdateCommentCountMutation } = commentApi;

