import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ baseUrl: "https://pc-cloud-server.vercel.app/" }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetAllProductsQuery } = apiSlice;
