import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const isDev = import.meta.env.MODE === "development";

const API_URL = isDev
  ? `${import.meta.env.VITE_API_URL_DEV}`
  : `${import.meta.env.VITE_API_URL_PROD}`;

export const fetchPlots = createAsyncThunk("plots/fetchPlots", async () => {
  const { data } = await axios.get(`${API_URL}/api/plots`);
  
  return data;
});
export const addPlot = createAsyncThunk("plots/addPlot", async (newPlot) => {
  const { data } = await axios.post(`${API_URL}/api/plots`, newPlot);
  return data;
});
const plotsSlice = createSlice({
  name: "plots",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleSoldStatus: (state, action) => {
      const plot = state.list.find((p) => p._id === action.payload);
      if (plot) {
        plot.status = plot.status === "sold" ? "available" : "sold";
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlots.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPlots.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchPlots.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleSoldStatus } = plotsSlice.actions;
export default plotsSlice.reducer;
