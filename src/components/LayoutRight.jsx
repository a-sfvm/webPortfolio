import classes from "./LayoutRight.module.css";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection"

function LayoutRight() {
  return (
    <>
      <div className={classes.layoutright}>
        <AboutSection />
        <SkillsSection />
      </div>
    </>
  )
}

export default LayoutRight;
