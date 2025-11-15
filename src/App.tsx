import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/authpage/AuthPage";
import DashboardPage from "./pages/dashboard/DashboardPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardPage />} /> 
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}