// import React from 'react'
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f8bdfb76-d838-4677-8834-7c7afe418a40");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div>
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let s Talk</h1>
            <p>
              Connect with us effortlessly through our user-friendly contact
              page. Whether you have questions, or inquiries, us me is here to
              assist you promptly. Simply fill out the form provided, and we get
              back to you swiftly. Your satisfaction is our priority
            </p>
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

              <div className="icon-container">
                <a href="https://github.com/jainik12345" target="_blank">
                  <img className="github" src={github} alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jainik-darji-899759233/"
                  target="_blank"
                >
                  <img className="linkedin" src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor=""> </label>
            <input type="text" placeholder="Enter Your Name" name="name" />
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              id=""
            />
            <label htmlFor=""></label>
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
