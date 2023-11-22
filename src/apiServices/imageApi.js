import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const unsplashBaseUrl = 'https://api.unsplash.com';
const unsplashAccessKey = 'zRAhYFPtotuOKTPqKQ9rvFL0kVxUkuluzUpq4UiD7c8';

export const unsplashApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: unsplashBaseUrl,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Client-ID ${unsplashAccessKey}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getImages: builder.query({
      query: () => 'photos',
    }),
    getImageById: builder.query({
      query: (imageId) => `photos/${imageId}`,
    }),
  }),
});

export const { useGetImagesQuery, useGetImageByIdQuery } = unsplashApi;
