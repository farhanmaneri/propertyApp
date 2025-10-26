import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiGrid,
  FiBook,
  FiDollarSign,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";

export default function Sidebar() {
  const location = useLocation();
  const menu = [
    { path: "/", icon: <FiHome />, label: "Home" },
    { path: "/plots", icon: <FiGrid />, label: "Plots" },
    { path: "/bookings", icon: <FiBook />, label: "Bookings" },
    { path: "/ledger", icon: <FiDollarSign />, label: "Ledger" },
    { path: "/hr", icon: <FiUsers />, label: "HR" },
    { path: "/reports", icon: <FiBarChart2 />, label: "Reports" },
  ];

  return (
    <aside className="hidden md:block bg-gray-100 h-screen w-64 shadow-inner fixed left-0 top-0 pt-16">
      <ul className="mt-4">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center px-6 py-3 hover:bg-blue-100 hover:text-blue-600 ${
                location.pathname === item.path
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-700"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
