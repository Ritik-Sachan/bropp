import React from "react";
import brop from "./brop.svg"
import google1 from "./google1.svg"
import apple from "./Apple.svg"
import back from "./back.png"
import TypingText from "./Typing";
function Home2(){
    return (
        <div className="body1">
        <section class="sec1">
        <div class="logo">
          <img src={brop} alt="" />
        </div>
        <div class="text">
          <h1>We are here to make you travel with a smile</h1>
        </div>
        <h4><TypingText   dataText={["LAUNCHING SOON ON"]}  /></h4>
        <div class="app">
          <img src={google1} alt="" />
          <img src={apple} alt="" />
        </div>
      </section>
      <section class="sec2">
        <img src={back} alt="" />
      </section>
      </div>
    )
}

export default Home2