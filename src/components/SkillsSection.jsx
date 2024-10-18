import { FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaReact } from 'react-icons/fa';
import { DiRuby } from "react-icons/di";
import { SiRubyonrails, SiHeroku, SiAdobeillustrator,SiAdobeindesign } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileSqlFill } from "react-icons/pi";

import classes from './SkillsSection.module.css';

const SkillsSection = () => {
  return (
    <>
      <h1 id="skills" className={classes.title}>Projects</h1>
      <div className={classes.iconGrid}>
        <div className={classes.iconItem}><DiRuby size={30} />
          <p className={classes.name}>RUBY</p>
        </div>
        <div className={classes.iconItem}><SiRubyonrails size={30} /></div>
        <div className={classes.iconItem}><FaHtml5 size={30} /></div>
        <div className={classes.iconItem}><FaCss3Alt size={30} /></div>
        <div className={classes.iconItem}><FaBootstrap size={30} /></div>
        <div className={classes.iconItem}><IoLogoJavascript size={30} /></div>
        <div className={classes.iconItem}><PiFileSqlFill size={30} /></div>
        <div className={classes.iconItem}><FaGitAlt size={30} /></div>
        <div className={classes.iconItem}><SiHeroku size={30} /></div>
        <div className={classes.iconItem}><FaReact size={30} /></div>
        <div className={classes.iconItem}><SiAdobeillustrator size={30} /></div>
        <div className={classes.iconItem}><SiAdobeindesign size={30} /></div>
      </div>
    </>
  );
};

export default SkillsSection;
