// import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt=''/>
      <h1><span>I'm Jainik Darji,</span> Web Developer !!!!!!</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, laboriosam.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
