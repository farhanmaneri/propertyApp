import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Plots from "../pages/Plots";
import Booking from "../pages/Booking";
import Ledger from "../pages/Ledger";
import HR from "../pages/HR";
import Reports from "../pages/Reports";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plots" element={<Plots />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/ledger" element={<Ledger />} />
        <Route path="/hr" element={<HR />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
