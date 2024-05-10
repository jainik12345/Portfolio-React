// import React from 'react'
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/112Z17X13cLrcwo_IEzPaf71YQzNp679I/view?usp=drive_link " ;
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Im Jainik Darji,</span> <br />
        Web Developer{" "}
      </h1>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With me
          </AnchorLink>
        </div>
        {/* <div className="hero-resume">My Resume</div> */}
        <div onClick={handleDownload}  className="hero-resume" target="_blank">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
