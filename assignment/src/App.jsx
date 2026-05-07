import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/navbar.jsx";
import GlossarySection from "./components/home/GlossarySection.jsx";
import Journey from "./pages/Journey.jsx";
import Quiz from "./pages/Quiz.jsx";
import AllTerms from "./pages/AllTerms.jsx";
import Result from "./pages/Result.jsx";
const App = () => {
  const location = useLocation(); // ✅ REQUIRED

  const hideNavbar = location.pathname === "/quiz"||location.pathname === "/result" ;

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<GlossarySection />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/quiz" element={<Quiz />} /> {/* ✅ ADD THIS */}
        <Route path="/result" element={<Result />} />
        <Route path="/all-terms" element={<AllTerms />} />
      </Routes>
    </>
  );
};

export default App;
