import React from "react";
import Project from "./Project";

function Container(props) {
  return (
    <>
<main class="grid-container">
    <section class = "grid-item title" id = "aboutme">
        <h2>About Me</h2>
    </section>
    <section class = "grid-item content">
        <p class = "notopmargin">
            <img class = "float-left" src = "./assets/images/susan-face-square.JPG" imgalt="Susan Face" /> Susan Fujii is the CEO and Founder of Kung Fu Finance, a business that has inspired and empowered thousands of individuals to master their money and grow their weimgalth through the philosophy of kung fu and the concept of mastery. She is launching a spinoff business focused on women this summer, Kung Fu Girl, whose mission is to empower women to master their minds and master their money so they can reclaim their confidence and live the abundant life they deserve— investing by women, for women.
        </p>
        <p>
            Susan has authored over 200 articles on personal finance and investing, has spoken in front of thousands, and is an active and avid angel investor herself. She’s a limited partner at Accelerate IT Ventures, a venture capital firm headquartered in La Jolla, CA, and has 20 years of experience working in the high tech and startup sector, most notably at Intel Corporation, where she traveled around the world supporting Andy Grove and Craig Barrett live on stage at prominent global tradeshows and events.</p>
        <p>
            Susan has a passion for companies that strive to push humanity forward and make a positive impact on the planet, and donates 10% of all business earnings to such ventures. Susan holds a BS in Computer Science and Engineering from the University of Michigan, and lives in Austin, TX with her husband and two daughters.</p>
    </section>


    <section class = "grid-item title" id = "work">
        <h2>Work</h2>
    </section>

    <section class = "grid-item content">
        <article>
            <Project href="https://srfujii.github.io/CAS_Bootcamp_Job_Search/index.html" imgsrc="./assets/images/01-project-job-search.png" imgimgalt="Job Search Engine Project" />
            <Project href="https://srfujii.github.io/Strong_Password_Generator/index.html" imgsrc="./assets/images/password-generator.png" imgalt = "Strong Password Generator" /> 
            <Project href="https://srfujii.github.io/Timed_JavaScript_Coding_Quiz/index.html" imgsrc = "./assets/images/coding-quiz.png" imgalt = "Coding Quiz Project" />
            <Project href="https://srfujii.github.io/Weather_Dashboard/index.html" imgsrc = "./assets/images/weather-data.png" imgalt = "Weather Data Project" />
            <Project href="https://srfujii.github.io/Work_Day_Scheduler/index.html" imgsrc = "./assets/images/work-day-schedule.png" imgalt = "Work Day Scheduler" />
            <Project href="https://srfujii.github.io/README_Generator/" imgsrc = "./assets/images/readme-generator.png" imgalt = "Professional README Generator" />
            <Project href="https://srfujii.github.io/Team_Profile_Generator/" imgsrc = "./assets/images/team-profile-generator.png" imgalt = "Team Profile Generator" />
            <Project href="https://srfujii.github.io/Experience_Next/" imgsrc = "./assets/images/experience-next.png" imgalt = "Experience Next Full Stack Web App" />
            <Project href="https://github.com/srfujii/Express_Note_Taker" imgsrc = "./assets/images/note-taker.png" imgalt = "Express Note Taker Web App" />
            <Project href="https://github.com/srfujii/Employee_Tracker_DB" imgsrc = "./assets/images/employee-tracker.png" imgalt = "Employee Tracker DB Web App" />
            <Project href="https://github.com/srfujii/ORM_ECommerce_Backend" imgsrc = "./assets/images/e-commerce-backend.png" imgalt = "ORM E-Commerce Web App" />
            <Project href="https://cryptic-gorge-79712.herokuapp.com/" imgsrc = "./assets/images/tech-blog.png" imgalt = "Technology Blogging Web App" />
        </article>
    </section>
    
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
</main>
    </>
  );
}

export default Container;