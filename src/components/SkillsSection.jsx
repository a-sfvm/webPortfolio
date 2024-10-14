import { FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaReact } from 'react-icons/fa';
import { DiRuby } from "react-icons/di";
import { SiRubyonrails, SiHeroku, SiAdobeillustrator,SiAdobeindesign } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileSqlFill } from "react-icons/pi";

import classes from './SkillsSection.module.css';

const SkillsSection = () => {
  return (
    <div id="skills" className={classes.iconGrid}>
      <div className={classes.iconItem}><DiRuby size={50} /></div>
      <div className={classes.iconItem}><SiRubyonrails size={50} /></div>
      <div className={classes.iconItem}><FaHtml5 size={50} /></div>
      <div className={classes.iconItem}><FaCss3Alt size={50} /></div>
      <div className={classes.iconItem}><FaBootstrap size={50} /></div>
      <div className={classes.iconItem}><IoLogoJavascript size={50} /></div>
      <div className={classes.iconItem}><PiFileSqlFill size={50} /></div>
      <div className={classes.iconItem}><FaGitAlt size={50} /></div>
      <div className={classes.iconItem}><SiHeroku size={50} /></div>
      <div className={classes.iconItem}><FaReact size={50} /></div>
      <div className={classes.iconItem}><SiAdobeillustrator size={50} /></div>
      <div className={classes.iconItem}><SiAdobeindesign size={50} /></div>
    </div>
  );
};

export default SkillsSection;
