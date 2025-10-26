// src/router/AppRouter.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard"; // this will be public homepage
import Plots from "../pages/Plots"; // user's own plots
import Booking from "../pages/Booking";
import Ledger from "../pages/Ledger";
import HR from "../pages/HR";
import Reports from "../pages/Reports";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Dashboard />} /> {/* Home: All plots */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected User Routes */}
        <Route
          path="/plots"
          element={
            <ProtectedRoute>
              <Plots />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ledger"
          element={
            <ProtectedRoute>
              <Ledger />
            </ProtectedRoute>
          }
        />
        {/* Admin Routes */}
        <Route
          path="/hr"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <HR />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Reports />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
