import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "WeCreative Site",
    github: "http://github.com/IbiminaFG/sunnyside-web",
    demo: "https://my-sunnyside-website.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "TicTacToe Game",
    github: "http://github.com/IbiminaFG/tic-tac-toe",
    demo: "https://friendly-fenglisu-f70831.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Todo App",
    github: "http://github.com/IbiminaFG/React_TodoList",
    demo: "https://react-todolist-web-app.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Dashboard",
    github: "http://github.com/IbiminaFG/syncfusion-dashboard",
    demo: "https://syncfusion-react-app.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Food Site",
    github: "http://github.com/IbiminaFG/Food-web",
    demo: "https://amazingdishes.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Design Tek Empire",
    github: "https://github.com/IbiminaFG/dte_landing_page",
    demo: "https://designtekempire.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" rel="noreferrer" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" rel="noreferrer" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
