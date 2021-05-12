import React from "react";
import "../App.css";

function Container(props) {
  return (
    <main className="grid-container">{props.children}</main>
  );
}

export default Container;