// src/pages/Home.jsx
import React from "react";
import { useGetPlotsQuery } from "../features/plots/plotsApiSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { data: plots, isLoading } = useGetPlotsQuery();
  const { userinfo:user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;

  const handleBuy = (plotId) => {
    if (!user) {
      alert("Please login to buy a plot.");
      navigate("/login");
      return;
    }
    // You can navigate to booking page or trigger mutation to buy plot
    navigate(`/bookings?plotId=${plotId}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Plots</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {plots?.map((plot) => (
          <div
            key={plot._id}
            className="border rounded-xl p-4 shadow-md flex flex-col justify-between"
          >
            <h2 className="font-semibold">{plot.title}</h2>
            <p>Status: {plot.status}</p>
            <p>Price: Rs {plot.price}</p>
            <p>Location: Rs {plot.location}</p>
            <p>Size: Rs {plot.size}</p>

            {plot.status.trim().toLowerCase() === "available" ? (
              <button
                onClick={() => handleBuy(plot._id)}
                className="bg-blue-500 text-white px-3 py-1 rounded mt-2 hover:bg-blue-600"
              >
                Buy Now
              </button>
            ) : (
              <button
                disabled
                className="bg-gray-400 text-white px-3 py-1 rounded mt-2 cursor-not-allowed"
              >
                {plot.status}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
