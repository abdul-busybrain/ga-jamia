import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/courses" component={CourseListing} />
            <Route path="/course/:id" component={CourseDetails} />
            <Route path="/login" component={LoginRegister} />
            <Route path="/free-trial" component={FreeTrial} />
            <Route path="/contact" component={ContactForm} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
