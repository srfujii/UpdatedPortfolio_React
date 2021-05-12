import React from "react";
import "../App.css";

function Project(props) {
  return (
    <div>
        <a target="_blank" rel="noreferrer" href={props.href}>
            <img className = "image" src={props.imgsrc}  alt={props.imgalt}  />
        </a>
    </div>
  );
}

export default Project;
