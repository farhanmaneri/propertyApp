// src/pages/Plots.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useGetPlotsQuery } from "../features/plots/plotsApiSlice";

export default function Plots() {
  const { user } = useSelector((state) => state.auth);
  const { data: plots, isLoading } = useGetPlotsQuery(user._id);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.role === "admin" ? "All Plots" : "My Plots"}</h1>
      <ul>
        {plots?.map((plot) => (
          <li key={plot._id}>
            {plot.title} — {plot.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
