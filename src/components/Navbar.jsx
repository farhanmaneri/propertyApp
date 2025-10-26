import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ Get user info from Redux (auto updates after login/logout)
  const { userInfo: user } = useSelector((state) => state.auth);

  // ✅ Logout function
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // ✅ Control mobile menu
  const toggleMenu = () => setOpen(!open);

  // ✅ Conditional links based on user role
  let navLinks = [{ path: "/", label: "Home" }];

  if (user) {
    if (user.role === "admin") {
      navLinks = [
        { path: "/", label: "Home" },
        { path: "/plots", label: "Plots" },
        { path: "/bookings", label: "Bookings" },
        { path: "/ledger", label: "Ledger" },
        { path: "/hr", label: "HR" },
        { path: "/reports", label: "Reports" },
      ];
    } else {
      navLinks = [
        { path: "/", label: "Home" },
        { path: "/plots", label: "Plots" },
      ];
    }
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            Property App
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* User Section */}
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium">
                  👋 Hi, {user.name?.split(" ")[0] || "User"}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 text-red-600 hover:text-red-800"
                >
                  <FiLogOut size={18} />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                <FiUser size={20} />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}

          {user ? (
            <div className="flex items-center justify-between px-4 py-3 border-t">
              <span className="text-gray-700">
                👋 {user.name?.split(" ")[0]}
              </span>
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="flex items-center gap-1 text-red-600 hover:text-red-800"
              >
                <FiLogOut size={18} /> Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <FiUser size={20} />
              <span>Login</span>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
