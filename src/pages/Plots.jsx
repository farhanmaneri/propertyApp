import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSoldStatus } from "../features/plots/plotsSlice";

export default function Plots() {
  const { list } = useSelector((state) => state.plots);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Property / Plots</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Code</th>
            <th>Block</th>
            <th>Size</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((p) => (
            <tr key={p.id} className="border-b">
              <td>{p.code}</td>
              <td>{p.block}</td>
              <td>{p.size}</td>
              <td>{p.price.toLocaleString()}</td>
              <td
                className={`font-semibold ${
                  p.status === "sold" ? "text-red-500" : "text-green-600"
                }`}
              >
                {p.status}
              </td>
              <td>
                <button
                  onClick={() => dispatch(toggleSoldStatus(p.id))}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Toggle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
