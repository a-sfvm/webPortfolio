import classes from "./LayoutRight.module.css";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection"
import ProjectsSection from "./ProjectsSection";

function LayoutRight() {
  return (
    <>
      <div className={classes.layoutright}>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </>
  )
}

export default LayoutRight;
