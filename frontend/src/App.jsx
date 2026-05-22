import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";

import LoginPage from "./pages/LoginPage";

import DashboardPage from "./pages/DashboardPage";

import ProtectedRoute from "./components/ProtectedRoute";

import CreateCoursePage from "./pages/CreateCoursePage";

import EditCoursePage from "./pages/EditCoursePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/create-course" element={<CreateCoursePage />} />

        <Route path="/edit-course/:courseId" element={<EditCoursePage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
