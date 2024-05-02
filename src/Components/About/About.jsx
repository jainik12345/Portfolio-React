// import React from 'react'

import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                I am an enthusiastic, self-motivated, reliable, responsible
and hard working person. I am able to work well both in a team
environment as well as using own initiative. I am able to work
well under pressure and adhere to strict deadlines
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>REACT.JS</p><hr style={{width:"95%"}} /></div>
                <div className="about-skill"><p>MYSQL</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>MongoDB</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>GIT & GIT.HUB</p><hr style={{width:"90%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Fresher</h1>
            <p>Years Of Experience</p>
        </div>
        <hr />

        <div className="about-achievement">
            <h1>3 +</h1>
            <p>Project</p>
        </div>

      </div>
    </div>
  )
}

export default About
