import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HomePage from "./homePage";
import ErrorPage from "./404";
import Login from "./register";
import StudentRecord from "./StudentRecord";
import ShowStudent from "./show";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    
    <Router>
      <Navbar />
      {/* <SpeedInsights /> */}
      {/* <Analytics /> */}
       <Routes>
        <Route path="/student/:matno" element={<ShowStudent />} />
        <Route path="/new/check" element={<StudentRecord/>} />
        <Route path="/" element={ <Login /> }/>
        <Route path="/*" element={<ErrorPage />}/>

      </Routes>
      <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
          theme="dark"
          style={{ fontSize: "1.2em", marginBottom: "5rem", }}
          toastStyle={{ backgroundColor: "#333" }}
          bodyStyle={{ fontSize: "1.5rem", color: "#fff" }}
          progressStyle={{ backgroundColor: "#fff" }}
        />
    </Router>
  );
}

export default App;
