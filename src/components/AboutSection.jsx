import classes from "./AboutSection.module.css";

function AboutSection() {
  return (
    <div className={classes.aboutcontainer} id="about" >
      <h3 className={classes.title}>About</h3>
      <div className={classes.text}>
        <p className={classes.pOne}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit odio et nisl bibendum, vel imperdiet nibh pharetra. Nullam scelerisque, massa eget suscipit dictum, augue lectus commodo dui, sit amet consequat ante libero vitae lectus. Proin dignissim ipsum quis bibendum tempor. Nullam dictum vel nibh quis ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis in dui mauris. Fusce gravida tellus sapien, vel volutpat orci aliquam sed. Morbi tincidunt vestibulum lacinia. Phasellus faucibus magna a nibh consequat bibendum. Aliquam erat volutpat. Vivamus sit amet commodo lorem.</p>
        <p className={classes.pTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit odio et nisl bibendum, vel imperdiet nibh pharetra. Nullam scelerisque, massa eget suscipit dictum, augue lectus commodo dui, sit amet consequat ante libero vitae lectus. Proin dignissim ipsum quis bibendum tempor. Nullam dictum vel nibh quis ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis in dui mauris. Fusce gravida tellus sapien, vel volutpat orci aliquam sed. Morbi tincidunt vestibulum lacinia. Phasellus faucibus magna a nibh consequat bibendum. Aliquam erat volutpat. Vivamus sit amet commodo lorem.</p>
      </div>
    </div>
  )
}

export default AboutSection;
