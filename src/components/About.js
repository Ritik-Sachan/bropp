import React from "react";
import target from "./target.png"
import goal from "./goal.png"
import eye from "./eye.png"

function About(){
    return(
      <div class="about" id="about">
      <h1 data-aos="fade-right" data-aos-duration="1000">Join us along the journey</h1>
      <div data-aos="fade-up" class="about1" data-aos-duration="3000">
        <div id="first" class="set">
          <div class="head">
            <img src={target} alt=""/>
            <h2>AIM</h2>
          </div>
          <p>
            "To promote innovation and provide a platform for speedy commercialisation of technology."
          </p>
        </div>
        <div id="second" class="set">
          <div class="head">
            <img src={goal} alt=""/>
            <h2>MISSION</h2>
          </div>
          <p>
            "Connecting travellers and making transportation reliable ."
          </p>
        </div>
        <div id="third" class="set">
          <div class="head">
            <img src={eye} alt=""/>
            <h2>VISION</h2>
          </div>
          <p>
            "We strive to offer our customers the best services."
          </p>
        </div>
      </div>
    </div>
        
    )
}

export default About;

