import { useState, useEffect } from "react";

import Resume from '../assets/Afonso-Melo_CV.pdf'
import classes from "./MainInfo.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const MainInfo = () => {
  const [animate, setAnimate] = useState(false);
  const [text, setText] = useState("<h2>Web Developer.</h2>");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animate) {
      const textChangeTimer = setTimeout(() => {
        setText("Web Developer.");
      }, 2000);

      return () => clearTimeout(textChangeTimer);
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
          <a href="https://github.com/a-sfvm" target='_blank'>
            <FaGithub className={classes.git}/>
          </a>
          <a href="https://www.linkedin.com/in/afonso-melo/" target="_blank">
            <FaLinkedin className={classes.linkedin}/>
          </a>
          <a href={Resume} target='_blank' className={classes.resume}>
            resume
          </a>
        </div>
        <div className={classes.index}>
          <p>About</p>
          <p>Skills</p>
          <p>Projects</p>
        </div>
      </div>
    </>
  );
}

export default MainInfo;
