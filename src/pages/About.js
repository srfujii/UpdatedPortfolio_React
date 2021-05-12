import React from "react";
import myimage from "../assets/images/susan-face-square.JPG";
import "../App.css";

function About() {
  return (
    <>
        <section className = "grid-item title" id = "aboutme">
            <h2>About Me</h2>
        </section>
        
        <section className = "grid-item content">
            <p className = "notopmargin">
                <img className = "float-left" src = {myimage} alt="Susan Fujii" /> Susan Fujii is the CEO and Founder of Kung Fu Finance, a business that has inspired and empowered thousands of individuals to master their money and grow their wealth through the philosophy of kung fu and the concept of mastery. She is launching a spinoff business focused on women this summer, Kung Fu Girl, whose mission is to empower women to master their minds and master their money so they can reclaim their confidence and live the abundant life they deserve— investing by women, for women.
            </p>
            <p>
                Susan has authored over 200 articles on personal finance and investing, has spoken in front of thousands, and is an active and avid angel investor herself. She’s a limited partner at Accelerate IT Ventures, a venture capital firm headquartered in La Jolla, CA, and has 20 years of experience working in the high tech and startup sector, most notably at Intel Corporation, where she traveled around the world supporting Andy Grove and Craig Barrett live on stage at prominent global tradeshows and events.</p>
            <p>
                Susan has a passion for companies that strive to push humanity forward and make a positive impact on the planet, and donates 10% of all business earnings to such ventures. Susan holds a BS in Computer Science and Engineering from the University of Michigan, and lives in Austin, TX with her husband and two daughters.</p>
        </section>
    </>
  );
}

export default About;