import React from "react";

import styles from "./Contact.module.css";
import getImageUrl from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/006/827/459/small_2x/email-icon-sign-symbol-logo-vector.jpg" alt="Email icon"/>
          <a href="mailto:sumobarnwal@gmail.com">sumobarnwal@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2p1MTD2NhJrfsv7vijIERZUxqqSHOxsIE6MNwkzL_JQ&s"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/suman-kumar-bbaaba232/">suman-kumar-bbaaba232/</a>
        </li>
        <li className={styles.link}>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github icon" />
          <a href="https://www.github.com/suman7033">suman7033</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
