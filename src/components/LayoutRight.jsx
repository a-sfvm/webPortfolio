import classes from "./LayoutRight.module.css";
import AboutSection from "./AboutSection";

function LayoutRight() {
  return (
    <>
      <div className={classes.layoutright}>
        <AboutSection></AboutSection>
      </div>
    </>
  )
}

export default LayoutRight;
