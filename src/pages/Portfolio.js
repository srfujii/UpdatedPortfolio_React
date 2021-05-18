import React from "react";
import Project from "../components/Project";
import "../App.css";
import Project01 from "../assets/images/01-project-job-search.png";
import PasswordGenerator from "../assets/images/password-generator.png";
import CodingQuiz from "../assets/images/coding-quiz.png";
import WeatherData from "../assets/images/weather-data.png";
import WorkSchedule from "../assets/images/work-day-schedule.png";
import README from "../assets/images/readme-generator.png";
import TeamProfile from "../assets/images/team-profile-generator.png";
import ExperienceNext from "../assets/images/experience-next.png";
import NoteTaker from "../assets/images/note-taker.png";
import EmployeeTracker from "../assets/images/employee-tracker.png";
import ECommerce from "../assets/images/e-commerce-backend.png";
import TechBlog from "../assets/images/tech-blog.png";
import GoogleBooksAPI from "../assets/images/google-books-mern.png";

function Portfolio() {
  return (
    <>
        <section class = "grid-item title" id = "portfolio">
            <h2>Portfolio</h2>
        </section>
        <section class = "grid-item content">
            <article>
                <Project href="https://srfujii.github.io/CAS_Bootcamp_Job_Search/index.html" imgsrc={Project01} imgalt="Job Search Engine Project" />
                <Project href="https://murmuring-citadel-81538.herokuapp.com/" imgsrc={GoogleBooksAPI} imgalt="MERN Google Books API Save Favorites Search App" />
                <Project href="https://srfujii.github.io/Strong_Password_Generator/index.html" imgsrc={PasswordGenerator} imgalt="Strong Password Generator" />
                <Project href="https://srfujii.github.io/Timed_JavaScript_Coding_Quiz/index.html" imgsrc={CodingQuiz} imgalt="Coding Quiz Project" />
                <Project href="https://srfujii.github.io/Weather_Dashboard/index.html" imgsrc={WeatherData} imgalt="Weather Data Project" />
                <Project href="https://srfujii.github.io/Work_Day_Scheduler/index.html" imgsrc={WorkSchedule} imgalt="Work Day Scheduler" />
                <Project href="https://srfujii.github.io/README_Generator/" imgsrc={README} imgalt="Professional README Generator" />
                <Project href="https://srfujii.github.io/Team_Profile_Generator/" imgsrc={TeamProfile} imgalt="Team Profile Generator" />
                <Project href="https://srfujii.github.io/Experience_Next/" imgsrc={ExperienceNext} imgalt="Experience Next Full Stack Web App" />
                <Project href="https://github.com/srfujii/Express_Note_Taker" imgsrc={NoteTaker} imgalt="Express Note Taker Web App" />
                <Project href="https://github.com/srfujii/Employee_Tracker_DB" imgsrc={EmployeeTracker} imgalt="Employee Tracker DB Web App" />
                <Project href="https://github.com/srfujii/ORM_ECommerce_Backend" imgsrc={ECommerce} imgalt="ORM E-Commerce Web App" />
                <Project href="https://cryptic-gorge-79712.herokuapp.com/" imgsrc={TechBlog} imgalt="Technology Blogging Web App" />
            </article>
        </section>
    </>
  );
}

export default Portfolio;