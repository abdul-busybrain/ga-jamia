import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";

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
import FirebaseLogin from "./ui/FirebaseLogin";
import FirebaseRegister from "./ui/FirebaseRegister";
import FirebaseHome from "./ui/FirebaseHome";
import { AuthProvider } from "./contexts/authContext";
import FirebaseHeader from "./ui/FirebaseHeader";

function App() {
  const routesArray = [
    {
      path: "/login",
      element: <FirebaseLogin />,
    },
    {
      path: "/register",
      element: <FirebaseRegister />,
    },
    {
      path: "/homer",
      element: <FirebaseHome />,
    },
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <FirebaseHeader />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );

  /**
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
  ); */
}

export default App;
