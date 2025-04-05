import React, { useState,useEffect } from 'react'
import { NavLink,Link} from 'react-router-dom'
import '../styles/index.css'

function Navbar(){
   const [Show,setShow] = useState(false)

   function Menu(){
      setShow(!Show)
   }
        
   useEffect(()=>{
    const handleScroll = () =>{
      setShow(false)
    }
    window.addEventListener("scroll",handleScroll)
   },[])

    return(
     
   <>
     <div className="head">WELCOME TO COMPUTER SCIENCE STUDENT REGISTRATION PORTAL</div>
    <nav>
   
    <div className="logo">
        <h1>Osdin.net</h1>
    </div>

    <ul className='menu-items'>
     <li>
       <NavLink to="/">Home</NavLink> 
      </li>
     <li>
       <NavLink to="/">Check your Name</NavLink> 
      </li>
      <li>
        <a href="https://wa.me/2349126785031?text=I%20Want%20To%20Hire%20A%20Developer" target='_blank'>Hire a Developer</a>
      </li>  
    </ul>
    <NavLink to="/register"><button className='logbtn' >Register</button> </NavLink>
      
          <div className={ "menu"} onClick={Menu}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>       
    </nav> 
    
    { Show && ( <div className="dropdown">
            <ul>
              <li>
                <Link  to="/" onClick={Menu}>Home</Link>
              </li>
             
              <li>
                <Link to="/k"  onClick={Menu}>Check your Name</Link>
              </li>
              <li>
                <Link to="/register"  onClick={Menu}>Register</Link>
              </li>
              <li>
              <a href="https://wa.me/2349126785031?text=I%20Want%20to%20Hire%20A%20Developer" target='_blank'>Hire a Developer</a>
              </li>
            </ul>
          </div>
         ) }
  
        </>
    )
}


export default Navbar