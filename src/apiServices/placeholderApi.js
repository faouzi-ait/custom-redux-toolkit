import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const placeholderApi = createApi({
  reducerPath: 'placeholderApi',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Post'],
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
  onError: (error /*, { dispatch, getState }*/) => {
    console.error('Global error handler:', error);
  },
});

export const { useGetPostsQuery, useCreatePostMutation } = placeholderApi;
