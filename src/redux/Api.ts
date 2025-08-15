import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const API_URL = "http://localhost:3001";

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
            query: () => "/products",
        })
    })
});

export const { useGetProductsQuery } = userApi;