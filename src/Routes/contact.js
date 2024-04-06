import React from 'react'

function Contact() {
  return (
    <div className="contact">
        <h3>Contact Me</h3>
        <form action="" method="post">
            <label htmlFor="name">Name </label>
            <input type="text" name="name" id="name"/><br/>
            <label htmlFor="email">Email </label>
            <input type="email" name="email" id="email"/><br/>
            <label htmlFor="message">Message </label>
            <textarea name="message" id="message"></textarea><br/>
            <button type="submit">Submit</button>
            {/* comments */}
        </form>
    </div>
  )
}

export default Contact