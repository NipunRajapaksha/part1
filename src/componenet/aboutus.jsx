import React,{useState} from "react";
import '../aboutus.css';
function Aboutus() {

   
    return (
  <><><><><>
      <div class="heading">
          <h1>Intern Web Hub</h1>
          <h3>&mdash; home>about us &mdash; </h3>

      </div></>
      <div class="welcome">
          <h2>About us</h2>
          <h1>Welcome to Intern WEB Hub!!! ,
            where opportunities meet ambition.</h1>

          The largest community engagement platform built to help talent be unstoppable.
      </div></>
      <div class="content">
      <div class="whatwedo">
          <h2><b>What We Do</b></h2>
          Intern WEB Hub serves as a comprehensive platform that connects
          aspiring interns with diverse internship opportunities across various
          industries and sectors.
      </div>
      <div class="img">
        <img src="./image/2.jpg" alt=""></img>
      </div>
          
      <div class="mission"> 
          <h2><b>Our Mission</b></h2>
          Our mission is to empower students and recent graduates to discover, apply for, and excel in
          internships that align with their passions, skills, and career aspirations.
      </div>
      </div></>
      <div class="why">
      <div class="para">
          <h2><b>Why Choose Intern WEB Hub?</b></h2>
          <ul className="bullet-points">
            <li><b>Comprehensive Internship Listings:</b> Gain access to a
              wide range of internship opportunities from leading companies across various industries.</li>
            <li><b>User-Friendly Interface:</b> Our intuitive platform makes it easy for students and
              companies to search, apply for, and manage internships efficiently.</li>
            <li><b>Personalized Recommendations:</b> Receive tailored internship recommendations based on
              your interests, skills, and career goals.</li>
          </ul>
          </div>
          <div class="img1"><img src="./image/3.jpg" alt=""></img></div>
          
      </div></>
      <div class="get">
        
          <h2><b>Get Started Today</b></h2>
          Ready to kickstart your internship journey or 
          find top-notch interns for your organization? Join InternHub today and unlock a world of opportunities!
      </div></>
        
    );
}
export default Aboutus;
