import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
 reducerPath: 'shazamCoreApi',
 baseQuery: fetchBaseQuery({
  baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
  prepareHeaders: (headers) => {
   headers.set(
    'X-RapidAPI-Key',
    '4fa0695531msh9cc2408b03d2dcap1c34eajsneaa8b7756166'
   );

   return headers;
  },
 }),
 endpoints: (builder) => ({
  getTopCharts: builder.query({ query: () => '/charts/world' }),
 }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
