import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/app.css'


function Drop() {
  return (
    <>
      <div className="dropdown">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li>
            <Link to="/tracking">Tracking</Link>
          </li>
          <li>
            <Link to="/pricing-plans">Pricing</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
// { dropDown ? <Drop /> : null}

function Footer() {
  return (
    <>
      <footer>
       <div className="right">
        <p>Osdin.net &copy; 2025, All Right Reserved.</p>
       </div>
      </footer>
    </>
  );
}

function Contact(props){
return(
  <>
  <div className="cont">
      <div className="icon">{props.icon}</div>
      <h2>{props.head}</h2>
      <p>{props.tail}</p>
      <Link to={props.to}>{props.title}</Link>
  </div>
    
  </>
)
  
}

export {  Drop, Footer,Contact};

