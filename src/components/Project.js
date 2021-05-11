import React from "react";


function Project(props) {
  return (
    <div>
        <a target="_blank" rel="noreferrer" href={props.href}>
            <img class = "image" src={props.imgsrc}  alt={props.imgalt}  />
        </a>
    </div>
  );
}

export default Project;
