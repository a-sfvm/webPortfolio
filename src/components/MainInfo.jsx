import { useState, useEffect } from "react";

import Resume from '../assets/Afonso-Melo_CV.pdf'
import classes from "./MainInfo.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const MainInfo = () => {
  const [animate, setAnimate] = useState(false);
  const [text, setText] = useState("<h2>Web Developer.</h2>");
  const [activeIndex, setActiveIndex] = useState(null);

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

  const handleScroll = () => {
    const aboutPosition = document.getElementById("about").getBoundingClientRect();
    const skillsPosition = document.getElementById("skills").getBoundingClientRect();
    const projectsPosition = document.getElementById("projects").getBoundingClientRect();

    // Detect if the section is in the viewport (approximately)
    if (aboutPosition.top >= 0 && aboutPosition.top <= window.innerHeight / 1) {
      setActiveIndex(0);
    } else if (skillsPosition.top >= 0 && skillsPosition.top <= window.innerHeight / 1) {
      setActiveIndex(1);
    } else if (projectsPosition.top >= 0 && projectsPosition.top <= window.innerHeight / 1) {
      setActiveIndex(2);
    } else {
      setActiveIndex(null); // If no section is in view
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onClickSection = (sectionId, index) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveIndex(index); // Set the active index when clicked
  };

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
          <p
            onClick={() => onClickSection("about", 0)}
            className={activeIndex === 0 ? classes.active : ""}
          >
            About
          </p>
          <p
            onClick={() => onClickSection("skills", 1)}
            className={activeIndex === 1 ? classes.active : ""}
          >
            Skills
          </p>
          <p
            onClick={() => onClickSection("projects", 2)}
            className={activeIndex === 2 ? classes.active : ""}
          >
            Projects
          </p>
        </div>
      </div>
    </>
  );
}

export default MainInfo;
