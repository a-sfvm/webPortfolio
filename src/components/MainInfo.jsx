import { useState, useEffect } from "react";

import classes from "./MainInfo.module.css";
import { FaGithub } from "react-icons/fa";

function MainInfo() {
  const [animate, setAnimate] = useState(false); // Track if the animation should start
  const [text, setText] = useState("<h3>Web Developer.</h3>"); // Initial text

  useEffect(() => {
    // Trigger the animation after 5 seconds
    const timer = setTimeout(() => {
      setAnimate(true); // Start the deleting and typing animation
    }, 3000); // Wait for 5 seconds

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
      <div>
        <FaGithub />
      </div>
    </div>
    </>
  );
}

export default MainInfo;
