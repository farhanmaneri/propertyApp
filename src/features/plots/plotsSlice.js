import { createSlice } from "@reduxjs/toolkit";
import fakePlots from "./fakePlots.json";

const plotsSlice = createSlice({
  name: "plots",
  initialState: {
    list: fakePlots,
  },
  reducers: {
    toggleSoldStatus: (state, action) => {
      const plot = state.list.find((p) => p.id === action.payload);
      if (plot) {
        plot.status = plot.status === "sold" ? "available" : "sold";
      }
    },
  },
});

export const { toggleSoldStatus } = plotsSlice.actions;
export default plotsSlice.reducer;
