import jpeeg from "../assets/SurfRnR-home.jpg"
import classes from "./ProjectsSection.module.css"

function ProjectsSection() {
  return (
    <>
      <h1>Some text</h1>
      <div className={classes.imagecont}>
      <img src={jpeeg} alt="" className={classes.image}/>
      </div>
    </>
  )
}

export default ProjectsSection;
