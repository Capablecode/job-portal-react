// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css"; // Optional: for additional global styling
import Companies from "./Components/Companies";
import Candidates from "./Components/Candidates";
import Assessment from "./Components/Assessment";
import PostJob from "./Components/PostJob";
import CareerAdvice from "./Components/CareerAdvice";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import NotFound from "./Components/NotFound";
import SectionBelowNavbar from "./Components/SectionBelowNavbar";
import Job from "./Components/Job";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" />
            <Route path="/companies" element={<Companies />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/career-advice" element={<CareerAdvice />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            {/* Add a default fallback route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>

        <SectionBelowNavbar />
        <Job />
      </div>
    </>
  );
};

export default App;
