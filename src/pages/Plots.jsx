import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlots, addPlot } from "../features/plots/plotsSlice";
import AddPlotModal from "../components/AddPlotModal";

export default function Plots() {
  const dispatch = useDispatch();
  const { list: plots, loading, error } = useSelector((state) => state.plots);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchPlots());
  }, [dispatch]);

  const handleAddPlot = async (formData) => {
    await dispatch(addPlot(formData));
    setShowModal(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Plots Management</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + Add Plot
        </button>
      </div>

      {/* Loading / Error */}
      {loading && <p className="text-blue-600">Loading plots...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {/* Table */}
      {!loading && !error && plots.length > 0 ? (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-800 uppercase text-xs font-semibold">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Plot Number</th>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left">Size</th>
                <th className="px-4 py-3 text-left">Price (PKR)</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {plots.map((plot, index) => (
                <tr
                  key={plot._id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium">{plot.plotNumber}</td>
                  <td className="px-4 py-3">{plot.location}</td>
                  <td className="px-4 py-3">{plot.size}</td>
                  <td className="px-4 py-3">{plot.price.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        plot.status === "available"
                          ? "bg-green-100 text-green-700"
                          : plot.status === "booked"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {plot.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-gray-600">No plots found.</p>
      )}

      {/* Modal */}
      {showModal && (
        <AddPlotModal onClose={() => setShowModal(false)} onSave={handleAddPlot} />
      )}
    </div>
  );
}
