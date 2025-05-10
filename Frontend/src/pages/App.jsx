import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ErrorPage from "./404";
import Login from "./register";
import StudentRecord from "./StudentRecord";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <SpeedInsights /> */}
   
      <Routes>
      
        <Route path="/new/check" element={<StudentRecord />} />
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<ErrorPage />} />
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
        style={{ fontSize: "1.2em", marginBottom: "5rem" }}
        toastStyle={{ backgroundColor: "#333" }}
        bodyStyle={{ fontSize: "1.5rem", color: "#fff" }}
        progressStyle={{ backgroundColor: "#fff" }}
      />
    </Router>
  );
}

export default App;
