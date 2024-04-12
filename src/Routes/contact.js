import React, { useState } from "react";
import "../App.css";

function Contact() {
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let isValid = true;
    let errorMessage = "";

    switch (name) {
      case "name":
        isValid = value.match(/^[a-zA-Z\s]+$/);
        errorMessage = isValid ? "" : "Please enter a valid name.";
        break;
      case "email":
        // eslint-disable-next-line
        isValid = value.match(/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/);
        errorMessage = isValid ? "" : "Please enter a valid email address.";
        break;
      default:
        break;
    }

    switch (name) {
      case "name":
        setNameValid(isValid);
        setNameError(errorMessage);
        setNameFocused(false);
        break;
      case "email":
        setEmailValid(isValid);
        setEmailError(errorMessage);
        setEmailFocused(false);
        break;
      case "message":
        setMessageFocused(false);
        break;
      default:
        break;
    }
  };

  const handleFocus = (event) => {
    const { name } = event.target;
    switch (name) {
      case "name":
        setNameValid(true);
        setNameFocused(true);
        break;
      case "email":
        setEmailValid(true);
        setEmailFocused(true);
        break;
      case "message":
        setMessageFocused(true);
        break;
      default:
        break;
    }
  };

  const getInputClass = (name) => {
    switch (name) {
      case "name":
        return nameValid ? " " : "invalid";
      case "email":
        return emailValid ? " " : "invalid";
      default:
        return "";
    }
  };

  const Input = document.querySelectorAll(".form-input");

  Input.forEach((input) => {
    input.addEventListener("focus", function () {
      let parent = this.parentNode;
      parent.classList.add("focus");
    });
    input.addEventListener("blur", function () {
      let parent = this.parentNode;
      parent.classList.remove("focus");
    });
  });

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
        <form
          className="gform"
          action="https://script.google.com/macros/s/AKfycbzVcr034xIE79ENPoXCVZlwdlYTvvOIQ4Xy-Iloo-6RFXMbPLGU500lgIINVfXQZrsY/exec"
          method="post"
          onSubmit={(event) => event.preventDefault()}
        >
          <div
            className={`msg ${getInputClass("name")} ${
              nameFocused ? "focus" : ""
            }`}
          >
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <span>*</span>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className={`form-input ${getInputClass("name")} `}
              onBlur={handleInputChange}
              onFocus={handleFocus}
              autoComplete="off"
            />
            <br />
          </div>
          {!nameValid && <p className="error">{nameError}</p>}
          <div
            className={`msg  ${getInputClass("email")} ${
              emailFocused ? "focus" : ""
            }`}
          >
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <span>*</span>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className={`form-input ${getInputClass("email")}`}
              onBlur={handleInputChange}
              onFocus={handleFocus}
              autoComplete="off"
            />
            <br />
          </div>
          {!emailValid && <p className="error">{emailError}</p>}
          <div className={`msg ${messageFocused ? "focus" : ""}`}>
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
          <button type="submit" className="message-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
