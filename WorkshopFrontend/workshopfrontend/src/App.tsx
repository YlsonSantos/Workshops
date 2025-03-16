import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import Home from "./pages/Home";
import WorkshopPage from "./pages/WorkshopPage";
import Navbar from "./components/Navbar"; 

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshops" element={<WorkshopPage />} />
      </Routes>
    </Router>
  );
};

export default App;
