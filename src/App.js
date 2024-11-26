import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <>
      <Header />
      <Hero />

      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Categories />
          <main className="py-8">
            <Routes>
              <Route path="/" element={<AllCourses />} />
              <Route path="/product-design" element={<ProductDesign />} />
              <Route path="/frontend" element={<FrontendDev />} />
              <Route path="/backend" element={<BackendDev />} />
              <Route path="/mobile" element={<MobileDev />} />
              <Route path="/nocode" element={<NoCodeDev />} />
              <Route
                path="/project-management"
                element={<ProjectManagement />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>

      <PopularInstructors />
    </>
  );
}

export default App;
