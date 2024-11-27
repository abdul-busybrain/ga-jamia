import {  Routes, Route,  } from "react-router-dom";

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

function App() {

  return (
    <>
      <Header />
      <Hero />

      <div className="min-h-screen bg-gray-50">
        <Categories />
        <main className="py-8">
          <Routes>
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/courses/product-design" element={<ProductDesign />} />
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
    </>
  ); }

export default App;
