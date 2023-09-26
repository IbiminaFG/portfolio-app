import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Tailwind CSS Styling.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Maintenance.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Code Reviews and Optimization.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Solutions.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
