import { apiSlice } from "../api/apiSlice";

export const plotApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlots: builder.query({
      query: () => "/api/plots",
      providesTags: ["Plot"],
    }),
    addPlot: builder.mutation({
      query: (newPlot) => ({
        url: "/plots",
        method: "POST",
        body: newPlot,
      }),
      invalidatesTags: ["Plot"],
    }),
  }),
});

export const { useGetPlotsQuery, useAddPlotMutation } = plotApiSlice;
