import React from "react";
import {
  useGetPlotsQuery,
  useAddPlotMutation,
} from "../features/plots/plotsSlice";

export default function Plots() {
  const { data: plots = [], isLoading } = useGetPlotsQuery();
  // console.log(data)
  const [addPlot] = useAddPlotMutation();

  if (isLoading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Plots</h2>
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Plot Number</th>
            <th className="border p-2">Size</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {plots.map((p) => (
            <tr key={p._id}>
              <td className="border p-2">{p.plotNumber}</td>
              <td className="border p-2">{p.size}</td>
              <td className="border p-2">{p.location}</td>
              <td className="border p-2">{p.price}</td>
              <td className="border p-2">{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
