import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/app.css'

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

export { Footer};

