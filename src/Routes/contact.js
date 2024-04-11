import React from "react";
import "../App.css";

function Contact() {
  return (
    <div className="contact">
      <div className="field-left">
        <h1>Contact Me</h1>
        <div>
          {" "}
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, my inbox is always open. I do my best
          to respond within 1-2 working days.
        </div>
      </div>
      <div className="field-right">
        <form className='gform' action="https://script.google.com/macros/s/AKfycbzVcr034xIE79ENPoXCVZlwdlYTvvOIQ4Xy-Iloo-6RFXMbPLGU500lgIINVfXQZrsY/exec" method="post">
          <div className="msg">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <span>*</span>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
            />
            <br />
          </div>
          <div className="msg">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <span>*</span>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
            />
            <br />
          </div>
          <div className="msg">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <span>*</span>
            <br />
            <textarea
              name="message"
              id="message"
              className="textarea form-input"
            ></textarea>
            <br />
          </div>
          <button type="submit" className="message-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
