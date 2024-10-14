import { FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaReact } from 'react-icons/fa';
import { DiRuby } from "react-icons/di";
import { SiRubyonrails, SiHeroku, SiAdobeillustrator,SiAdobeindesign } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileSqlFill } from "react-icons/pi";

import './SkillsSection.css';

const SkillsSection = () => {
  // return (
  //   <div id="skills" className={classes.iconGrid}>
  //     <div className={classes.iconItem}><DiRuby size={30} /></div>
  //     <div className={classes.iconItem}><SiRubyonrails size={30} /></div>
  //     <div className={classes.iconItem}><FaHtml5 size={30} /></div>
  //     <div className={classes.iconItem}><FaCss3Alt size={30} /></div>
  //     <div className={classes.iconItem}><FaBootstrap size={30} /></div>
  //     <div className={classes.iconItem}><IoLogoJavascript size={30} /></div>
  //     <div className={classes.iconItem}><PiFileSqlFill size={30} /></div>
  //     <div className={classes.iconItem}><FaGitAlt size={30} /></div>
  //     <div className={classes.iconItem}><SiHeroku size={30} /></div>
  //     <div className={classes.iconItem}><FaReact size={30} /></div>
  //     <div className={classes.iconItem}><SiAdobeillustrator size={30} /></div>
  //     <div className={classes.iconItem}><SiAdobeindesign size={30} /></div>
  //   </div>
  // );

  return (
    <div id="skills" className="icon-grid">
      <div className="icon-item">
        <DiRuby size={30} />
        <div className="encircling-text">Ruby</div>
      </div>
      <div className="icon-item">
        <SiRubyonrails size={30} />
        <div className="encircling-text">Rails</div>
      </div>
      <div className="icon-item">
        <FaHtml5 size={30} />
        <div className="encircling-text">HTML5</div>
      </div>
      <div className="icon-item">
        <FaCss3Alt size={30} />
        <div className="encircling-text">CSS3</div>
      </div>
      <div className="icon-item">
        <FaBootstrap size={30} />
        <div className="encircling-text">Bootstrap</div>
      </div>
      <div className="icon-item">
        <IoLogoJavascript size={30} />
        <div className="encircling-text">JavaScript</div>
      </div>
      <div className="icon-item">
        <PiFileSqlFill size={30} />
        <div className="encircling-text">SQL</div>
      </div>
      <div className="icon-item">
        <FaGitAlt size={30} />
        <div className="encircling-text">Git</div>
      </div>
      <div className="icon-item">
        <SiHeroku size={30} />
        <div className="encircling-text">Heroku</div>
      </div>
      <div className="icon-item">
        <FaReact size={30} />
        <div className="encircling-text">React</div>
      </div>
      <div className="icon-item">
        <SiAdobeillustrator size={30} />
        <div className="encircling-text">Illustrator</div>
      </div>
      <div className="icon-item">
        <SiAdobeindesign size={30} />
        <div className="encircling-text">InDesign</div>
      </div>
    </div>
  );
};

export default SkillsSection;
