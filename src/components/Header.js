import React from "react";
// import "./style.css";

function Header(props) {
  return (
    <header>
        <div class = "heading">
            <h1>Susan Fujii</h1>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="#aboutme">About Me</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#contactme">Contact Me</a>
                </li>
                <li>
                    <a href="./assets/pdf/Susan_Fujii_Resume.PDF" target="_blank" rel="noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
