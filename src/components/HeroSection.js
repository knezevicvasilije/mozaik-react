import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="./videos/mosaicBckVid2.mp4" autoPlay loop muted />
      <h1>MOZAIK</h1>
      <p>LALALALLALALALALA</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          START
        </Button>

        {/*    <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
