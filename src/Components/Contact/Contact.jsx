// import React from 'react'
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="contact-title">
          <h1>Get in Touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" />
                <p>darjijainik@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" />
                <p>+91 63580-82895</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p> Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>
          <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter Your Name" name="name" />
            <label htmlFor="">Your Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              id=""
            />
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Entert Your Message"
              id=""
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
