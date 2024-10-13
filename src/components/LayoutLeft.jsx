import classes from "./LayoutLeft.module.css";
import MainInfo from "./MainInfo";

function LayoutLeft() {
  return (
    <div className={classes.layoutleft}>
      <MainInfo />
    </div>
  )
}

export default LayoutLeft;
