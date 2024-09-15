import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getCustomets: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useGetCustometsQuery } = baseApi;
export default baseApi;
