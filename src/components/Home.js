import React from "react";
import back from "./back.png"
import brop2 from "./brop.svg"
import google from "./google1.svg"
import apple from "./Apple.svg"
import TypingText from "./Typing";
function Home(){
    return(
        <div className="content-container">
        <div className="row">
            <div className="left-panel box">
                <img src={brop2} alt="" className="brop2_img"/>
                <div className="slogan">We are here to make you travel with a smile</div>
                <div className="typingText"><TypingText   dataText={["LAUNCHING SOON ON"]}  /></div>
                <div className="store">
                    <img src={google} alt="" className="storeEl"/>
                    <img src={apple} alt="" className="storeEl"/>
                </div>
                
            </div>
            <div className="right-panel box">
                <img src={back} alt="" className="back_img"/>
            </div>
        </div>
        </div>        
         )
}

export default Home;