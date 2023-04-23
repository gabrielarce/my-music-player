import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam.p.rapidapi.com/",
        prepareHeaders: (headers) => {
            headers.set(
                "X-RapidAPI-Key",
                "876b17e9bfmsh6890a9bf61af22fp1a4154jsn56bec804bef7"
            );
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => "charts/track" }),
    }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;