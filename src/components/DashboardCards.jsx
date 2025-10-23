import React from "react";
export default function DashboardCards() {
  const stats = [
    { label: "Total Plots", value: 120, color: "bg-blue-500" },
    { label: "Sold Plots", value: 80, color: "bg-green-500" },
    { label: "Dealers", value: 15, color: "bg-purple-500" },
    { label: "Clients", value: 110, color: "bg-orange-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.label}
          className={`p-5 rounded-xl text-white shadow ${item.color}`}
        >
          <h3 className="text-lg">{item.label}</h3>
          <p className="text-2xl font-bold mt-2">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
