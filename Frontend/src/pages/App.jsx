import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HomePage from "./homePage";
import ErrorPage from "./404";
import Login from "./register";
import StudentRecord from "./StudentRecord";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    
    <Router>
      <Navbar />
      {/* <Analytics /> */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/check/students" element={<StudentRecord/>} />
        <Route path="/" element={ <Login /> }/>
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
