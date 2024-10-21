import Slider from 'react-slick';
// Import slick-carousel css files here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SurfBuddy_HomeAndFeed from "../assets/Project_photos/SurfBuddy_HomeAndFeed.png"
import SurfBuddy_SpotAndPost from "../assets/Project_photos/SurfBuddy_SpotAndPost.png"
import SurfBuddy_Search from "../assets/Project_photos/SurfBuddy_Search.png"

import classes from "./ProjectsSection.module.css"

const SurfbuddyCarousel = () => {
  const settings = {
    dots: true,                // Show navigation dots
    infinite: true,            // Enable infinite loop
    speed: 900,                // Transition speed
    slidesToShow: 1,           // Show one slide at a time
    slidesToScroll: 1,         // Scroll one slide at a time
    autoplay: true,            // Enable auto sliding
    autoplaySpeed: 5000,       // Time between each slide
    pauseOnHover: true,        // Pause sliding on hover
  };

  return (
    <Slider {...settings} className={classes.slider}>
      <div>
        <img src={SurfBuddy_HomeAndFeed} alt="SurfBuddy_HomeAndFeed" className={classes.image}/>
      </div>
      <div>
        <img src={SurfBuddy_Search} alt="SurfBuddy_Search" className={classes.image}/>
      </div>
      <div>
        <img src={SurfBuddy_SpotAndPost} alt="SurfBuddy_SpotAndPost" className={classes.image}/>
      </div>
    </Slider>
  )
}

export default SurfbuddyCarousel;
