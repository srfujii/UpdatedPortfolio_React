import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import SusanResume from "../assets/pdf/Susan_Fujii_Resume.PDF";

function Header() {

    const location = useLocation();

  return (
   <header>
        <div className = "heading">
            <h1>Susan Fujii</h1>
        </div>
        <nav>
            <ul>
                <li>
                <Link 
                    to="/" 
                    className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
                </li>
                <li>
                <Link 
                    to="/about" 
                    className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    About
                </Link>
                </li>
                <li>
                <Link 
                    to="/portfolio" 
                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                </Link>
                </li>
                <li>
                <Link 
                    to="/contact" 
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>
                </li>
                <li>
                    <a target="_blank" href={SusanResume}>Resume</a>
                </li>
            </ul>
        </nav>
    
    </header>
  );
}

export default Header;
