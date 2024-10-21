import Slider from 'react-slick';
// Import slick-carousel css files here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Surfbuddy_HomeAndFeed from "../assets/Project_photos/SurfBuddy_HomeAndFeed.png"
import Surfbuddy_SpotAndPost from "../assets/Project_photos/SurfBuddy_SpotAndPost.png"
import Surfbuddy_Search from "../assets/Project_photos/SurfBuddy_Search.png"

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
        <img src={Surfbuddy_HomeAndFeed} alt="Surfbuddy_HomeAndFeed" className={classes.image}/>
      </div>
      <div>
        <img src={Surfbuddy_Search} alt="Surfbuddy_Search" className={classes.image}/>
      </div>
      <div>
        <img src={Surfbuddy_SpotAndPost} alt="Surfbuddy_SpotAndPost" className={classes.image}/>
      </div>
    </Slider>
  )
}

export default SurfbuddyCarousel;
