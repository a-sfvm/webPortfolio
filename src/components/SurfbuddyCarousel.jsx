import Slider from 'react-slick';
// Import slick-carousel css files here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Surfbuddy_Home from "../assets/Project_photos/Surfbuddy_Home.png"
import Surfbuddy_MyFeed from "../assets/Project_photos/Surfbuddy_MyFeed.png"
import Surfbuddy_Post from "../assets/Project_photos/Surfbuddy_Post.png"
import Surfbuddy_SurfSpot from "../assets/Project_photos/Surfbuddy_SurfSpot.png"
import Surfbuddy_Search from "../assets/Project_photos/Surfbuddy_Search.png"

import classes from "./ProjectsSection.module.css"

const SurfbuddyCarousel = () => {
  const settings = {
    dots: true,                // Show navigation dots
    infinite: true,            // Enable infinite loop
    speed: 900,                // Transition speed
    slidesToShow: 1,           // Show one slide at a time
    slidesToScroll: 1,         // Scroll one slide at a time
    autoplay: true,            // Enable auto sliding
    autoplaySpeed: 5000,       // Time between each slide (3 seconds)
    pauseOnHover: true,        // Pause sliding on hover
  };

  return (
    <Slider {...settings} className={classes.slider}>
      <div>
        <img src={Surfbuddy_Home} alt="Surfbuddy_Home" className={classes.image}/>
      </div>
      <div>
        <img src={Surfbuddy_MyFeed} alt="Surfbuddy_MyFeed" className={classes.image}/>
      </div>
      <div>
        <img src={Surfbuddy_Search} alt="Surfbuddy_Search" className={classes.image}/>
      </div>
      <div>
        <img src={Surfbuddy_SurfSpot} alt="Surfbuddy_SurfSpot" className={classes.image}/>
      </div>
      <div>
        <img src={Surfbuddy_Post} alt="Surfbuddy_Post" className={classes.image}/>
      </div>
    </Slider>
  )
}

export default SurfbuddyCarousel;
