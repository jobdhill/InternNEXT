import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import Signup from "./pages/auth/Signup";
import VerifyEmail from "./pages/auth/VerifyEmail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/app" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
