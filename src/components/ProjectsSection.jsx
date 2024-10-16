import classes from "./ProjectsSection.module.css"
import RnrCarousel from "./RnrCarousel";
import SurfbuddyCarousel from "./SurfbuddyCarousel";

function ProjectsSection() {
  return (
    <>
      <div id="projects">
        <h1 className={classes.title}>Projects</h1>
        <RnrCarousel />
        <SurfbuddyCarousel />
      </div>
    </>
  )
}

export default ProjectsSection;
