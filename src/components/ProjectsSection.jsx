import classes from "./ProjectsSection.module.css"
import RnrCarousel from "./RnrCarousel";

function ProjectsSection() {
  return (
    <>
      <div id="projects">
        <h1 className={classes.title}>Projects</h1>
        <RnrCarousel />
      </div>
    </>
  )
}

export default ProjectsSection;
