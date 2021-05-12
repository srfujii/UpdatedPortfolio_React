import React from "react";
import "../App.css";

function Contact() {
  return (
    <>
        <section class = "grid-item title" id = "contactme">
            <h2>Contact Me</h2>
        </section>
        <section class = "grid-item content">
            <div class = "contactmebox">
                <h4 class = "contactme">+1.415.816.1996</h4>
                <h4 class = "contactme"><a href="mailto:susan.fujii@me.com?subject=We%20Would%20Like%20to%20Speak%20With%20You">susan.fujii@me.com</a></h4>
                <h4 class = "contactme"><a href="https://github.com/srfujii">GitHub</a></h4>
                <h4 class = "contactme"><a href="http://www.linkedin.com/in/srfujii">LinkedIn</a></h4>
                <h4 class = "contactme"><a href="https://twitter.com/KungFuFinance">Twitter</a></h4>
            </div>
        </section>        
    </>
  );
}

export default Contact;