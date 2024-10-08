import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Afonso Melo</h1>
      <h3>Web Developer</h3>
    </header>
  )
}

export default MainHeader;
