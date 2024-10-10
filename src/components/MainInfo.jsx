import { useState, useEffect } from "react";

import Resume from '../assets/Afonso-Melo-CV .pdf'

import classes from "./MainInfo.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function MainInfo() {
  const [animate, setAnimate] = useState(false); // Track if the animation should start
  const [text, setText] = useState("<h2>Web Developer.</h2>"); // Initial text

  useEffect(() => {
    // Trigger the animation after 5 seconds
    const timer = setTimeout(() => {
      setAnimate(true); // Start the deleting and typing animation
    }, 2000); // Wait for 5 seconds

    return () => clearTimeout(timer); // Cleanup in case component unmounts
  }, []);

  // Handle text change after the deleting animation completes
  useEffect(() => {
    if (animate) {
      const textChangeTimer = setTimeout(() => {
        setText("Web Developer."); // Change text after deleting
      }, 2000); // Wait for 2 seconds (length of the deleting animation)

      return () => clearTimeout(textChangeTimer); // Cleanup in case of unmount
    }
  }, [animate]);

  return (
    <>
    <div className={classes.container}>
      <h1 className={classes.title}>Afonso Melo</h1>
      <h3 className={`${classes.subtitle} ${animate ? classes['subtitle-deleting-typing'] : ''}`}>
        {text}
      </h3>
      <div className={classes.socials}>
        <FaGithub />
        <FaLinkedin />
        <a href={Resume} download="Afonso-Melo-Resume" target='_blank'>
          <button className={classes.navLink}>Resume</button>
        </a>
      </div>
    </div>
    </>
  );
}

export default MainInfo;
