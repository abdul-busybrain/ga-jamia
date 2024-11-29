import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Header from "./ui/Header";
import Hero from "./ui/Hero";
import Categories from "./ui/Categories";
import AllCourses from "./pages/AllCourses";
import FrontendDev from "./pages/FrontendDev";
import BackendDev from "./pages/BackendDev";
import MobileDev from "./pages/MobileDev";
import ProductDesign from "./pages/ProductDesign";
import ProjectManagement from "./pages/ProjectManagement";
import PageNotFound from "./ui/PageNotFound";
import NoCodeDev from "./pages/NoCodeDev";
import PopularInstructors from "./ui/PopularInstructors";
import NewsLetter from "./ui/NewsLetter";
import { AuthProvider, useAuth } from "./contexts/authContext";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Home from "./ui/Home";

function PrivateRoutes() {
  const { userLoggedIn } = useAuth();

  return userLoggedIn ? <Outlet /> : <Navigate to={"/login"} replace />;
}

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoutes />} />

          <Route path="/home" element={<Home />} />
        </Routes>
        <Hero />

        <div className="min-h-screen bg-gray-50">
          <Categories />
          <main className="py-8">
            <Routes>
              <Route path="/courses" element={<AllCourses />} />
              <Route
                path="/courses/product-design"
                element={<ProductDesign />}
              />
              <Route path="/courses/frontend" element={<FrontendDev />} />
              <Route path="/courses/backend" element={<BackendDev />} />
              <Route path="/courses/mobile" element={<MobileDev />} />
              <Route path="/courses/nocode" element={<NoCodeDev />} />
              <Route
                path="/courses/project-management"
                element={<ProjectManagement />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </div>

        <PopularInstructors />
        <NewsLetter />
      </AuthProvider>
    </>
  );
}

export default App;
