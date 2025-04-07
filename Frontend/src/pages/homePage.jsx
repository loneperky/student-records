import { NavLink, Link } from "react-router-dom";
import { Footer } from "./construct";
import { useEffect, useId, useState } from "react";
import axios from "axios";
import AOS from 'aos'
import gsap from 'gsap'
import { FaWhatsapp } from "react-icons/fa";
import '../styles/app.css'

function HomePage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);

  return (
    <>
     <div className="overall-section1">
      <h1>Welcome Lovelies</h1>
    
      <Footer />
     </div>
     {/* <Footer /> */}
    </>
  );
}

export default HomePage;
