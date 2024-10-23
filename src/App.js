import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import CourseListing from "./components/CourseListing";
import CourseDetails from "./components/CourseDetails";
import LoginRegister from "./components/LoginRegister";
import FreeTrial from "./components/FreeTrial";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/courses" element={<CourseListing />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/free-trial" element={<FreeTrial />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
