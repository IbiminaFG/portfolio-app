import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h5>GEt In Touch</h5>
      <h2>Contatc Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gogoibimina@gmail.com</h5>
            <a href="mailto:gogoibimina@gmail.com" rel="noreferrer" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>Loonetgf</h5>
            <a href="http://twitter.com/loonetgf"  rel="noreferrer" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2348146777398</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+2348146777398" rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
