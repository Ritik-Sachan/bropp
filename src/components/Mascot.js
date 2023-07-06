import React from "react";
import cloud from "./cloud.svg"
import mob from "./mob.png"
import google1 from "./google1.svg"
import apple from "./Apple.svg"
import TypingText from "./Typing";

function Mascot(){
    return(
      <div class="mascot" data-aos="fade-in">
      <img src={cloud} alt="" class="cloud"/>
      <img src={mob} alt="" class="mob" data-aos="flip-left" data-aos-duration="2000"/>
      <div class="ban">
        <div class="line1">What are you waiting <br/> for, Join us now !</div>
        <div class="launch">
          <div class="line2"><span class="typed1"></span></div>
          <div className="typingText2"><TypingText dataText={["LAUNCHING SOON ON"]}  /></div>
          <div class="app">
            <img src={google1} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
      <img src={cloud} alt="" class="cloud1"/>
    </div>
    )
}

export default Mascot