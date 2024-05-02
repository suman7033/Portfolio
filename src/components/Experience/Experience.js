import React from "react";

import styles from "./Experience.module.css";
//import skills from "../../data/skills.json";
//import history from "../../data/history.json";
//import {getImageUrl} from "../../utils";
//import getImageUrl from "../../utils";
//import htmlImage from '../img/html.png';

const Experience = () => {
  const skills=[
    {
      "title": "HTML",
      'imageSrc': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxifke0OBBQYAkOvYr3yINQgf4ZWhiQep9Mu4z7LINjQ&s"
    },
    {
      "title": "CSS",
      "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVY6DG6W9hEVULmOHxDVSplRdKJvuOvfwEacydbIk8A&s"
    },
    {
      "title": "JavaScript",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      "title": "React",
      "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNN_ihQpQ_ROKLRUjxlJcVaL0zSHU0bVpv-b_-EvGtgQ&s"
    },
    {
      "title": "Node",
      "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhI6livheP-nce1Ip0FB8doYPpN28A645YAdnFcSrf1w&s"
    },
    {
      "title": "Express js",
      "imageSrc": "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
    },
    {
      "title": "MySql",
      "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlGLH72Yh7sPDvzsPSw-xD4Nl7eOwjTXOpXwZIgOFMA&s"
    },
    {
      "title": "BootStrap",
      "imageSrc": "https://ncarb.github.io/bootstrap/assets/img/bootstrap-stack.png"
    },
    {
      "title": "Git",
      "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe50GdeZiVUVbWg3CNcZ-U-kNQbMDUhgc5i3fd-87rVQ&s"
    },
  ]

  const history=[
    {
      "role": "Frontend Engineer",
      "organisation": "Sharpener Tech",
      "startDate": "Sept, 2023",
      "endDate": "Present",
      "experiences": ["Worked on Ecommerce", "Expense Tracker","Client MailBox"],
      "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFS162v8JS8IuQIx2-JonimN3UqrI8RizrKHFzIQF3w&s"
    }
  ]
  
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
