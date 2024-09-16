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

    getCustomerById: builder.query({
      query: (id) => `/users/${id}`,
    }),

    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCustometsQuery,
  useGetCustomerByIdQuery,
  useDeleteCustomerMutation,
} = baseApi;
export default baseApi;
