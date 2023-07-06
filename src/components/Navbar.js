import React from "react";
import brop2 from "./brop2.png"
import plane1 from "./plane1.png"
import plane from "./plane.svg"
import insta from "./insta.svg"
import tweet from "./tweet.svg"

function Navbar(){
    return(
      <div>
      <div class="topnav">
      <div></div>
      <div class="contents">
        <div><a href="#body" id="l1">Home</a></div>
        <div><a href="#about" id="l2">About</a></div>
        <div><a href="#contact" id="l3">Contact</a></div>
      </div>
      <div class="logos">
        <img src={brop2} alt=""/>
        <img src={plane1} alt="" class="key2"/>
      </div>
    </div>
    <div class=" hidder">
    </div>
    <section class="sec3">
      <section class="sideNav1">
        <a href="#body"><img src={brop2} alt="" class="logo1"/></a>
        <img src={plane} alt="" class="plane" />
        <div class="social">
          <a href="https://www.instagram.com/brop.in/" target="blank"><img src={insta} alt=""/></a>
          <a href="https://twitter.com/Brop_in" target="blank"><img src={tweet} alt=""/></a>
        </div>
      </section>

    </section>
     </div>
      )
}

export default Navbar;




