import React from "react";
import email1 from "./email 1.svg"
import insta3 from "./instagram 3.svg"
import twitter3 from "./twitter 3.svg"
import person from "./person.svg"


function Contact1(){
    return(
      <div class="contact" id="contact">
    <h1 data-aos="fade-right" data-aos-duration="1000">Get in touch with us</h1>
    <div data-aos="fade-up" class="contact1" data-aos-duration="1500">
      <div id="first" class="set">
        <div class="con">
          <img src={email1} alt=""/>
          <div class="con1" id="copy_btn">support@brop.in</div>
        </div>
        <div class="con">
          <img src={insta3} alt=""/>
          <a href="https://www.instagram.com/brop.in/" class="con1" target="blank">
            <div>@brop.in</div>
          </a>
        </div>
        <div class="con">
          <img src={twitter3} alt=""/>
          <a href="https://twitter.com/brop_in" class="con1" target="blank">
            <div>@brop_in</div>
          </a>
        </div>
      </div>
      <div id="second" class="set">
        <img src={person} alt=""/>
      </div>
    </div>
  </div>
    )
}

export default Contact1;