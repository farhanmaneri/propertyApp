import { configureStore } from "@reduxjs/toolkit";
import plotsReducer from "../features/plots/plotsSlice";
// import bookingsReducer from "../features/bookings/bookingsSlice";
// import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    plots: plotsReducer,
    // bookings: bookingsReducer,
    // users: usersReducer,
  },
});
