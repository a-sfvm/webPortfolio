import Slider from 'react-slick';
// Import slick-carousel css files here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SurfRnR_home from "../assets/Project_photos/SurfRnR_home.png"
import SurfRnR_NewBoard from "../assets/Project_photos/SurfRnR_NewBoard.png"
import SurfRnR_Surfboard from "../assets/Project_photos/SurfRnR_Surfboard.png"
import SurfRnR_Surfboards from "../assets/Project_photos/SurfRnR_Surfboards.png"

import classes from "./ProjectsSection.module.css"

const RnrCarousel = () => {
  const settings = {
    dots: true,                // Show navigation dots
    infinite: true,            // Enable infinite loop
    speed: 800,                // Transition speed
    slidesToShow: 1,           // Show one slide at a time
    slidesToScroll: 1,         // Scroll one slide at a time
    autoplay: true,            // Enable auto sliding
    autoplaySpeed: 5000,       // Time between each slide (3 seconds)
    pauseOnHover: true,        // Pause sliding on hover
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={SurfRnR_home} alt="" className={classes.image}/>
      </div>
      <div>
        <img src={SurfRnR_NewBoard} alt="" className={classes.image}/>
      </div>
      <div>
        <img src={SurfRnR_Surfboard} alt="" className={classes.image}/>
      </div>
      <div>
        <img src={SurfRnR_Surfboards} alt="" className={classes.image}/>
      </div>
    </Slider>
  )
}

export default RnrCarousel;
