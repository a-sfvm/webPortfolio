import { FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaReact } from 'react-icons/fa';
import { DiRuby } from "react-icons/di";
import { SiRubyonrails, SiHeroku, SiAdobeillustrator,SiAdobeindesign } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileSqlFill } from "react-icons/pi";

import classes from './SkillsSection.module.css';

const SkillsSection = () => {
  return (
    <>
      <h1 id="skills" className={classes.title}>Skills & Tools</h1>
      <div className={classes.iconGrid}>
        <div className={classes.iconItem}><DiRuby size={30} />
          <p className={classes.name}>Ruby</p>
        </div>
        <div className={classes.iconItem}><SiRubyonrails size={30} />
          <p className={classes.name}>Ruby on Rails</p>
        </div>
        <div className={classes.iconItem}><FaHtml5 size={30} />
          <p className={classes.name}>HTML</p>
        </div>
        <div className={classes.iconItem}><FaCss3Alt size={30} />
          <p className={classes.name}>CSS</p>
        </div>
        <div className={classes.iconItem}><FaBootstrap size={30} />
          <p className={classes.name}>Bootstrap</p>
        </div>
        <div className={classes.iconItem}><IoLogoJavascript size={30} />
          <p className={classes.name}>JavaScript</p>
        </div>
        <div className={classes.iconItem}><PiFileSqlFill size={30} />
          <p className={classes.name}>SQL</p>
        </div>
        <div className={classes.iconItem}><FaGitAlt size={30} />
          <p className={classes.name}>git</p>
        </div>
        <div className={classes.iconItem}><SiHeroku size={30} />
          <p className={classes.name}>Heroku</p>
        </div>
        <div className={classes.iconItem}><FaReact size={30} />
          <p className={classes.name}>React</p>
        </div>
        <div className={classes.iconItem}><SiAdobeillustrator size={30} />
          <p className={classes.name}>Illustrator</p>
        </div>
        <div className={classes.iconItem}><SiAdobeindesign size={30} />
          <p className={classes.name}>InDesign</p>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
