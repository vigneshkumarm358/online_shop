import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // ✅ Required carousel styles
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={500}
        swipeable={false}
        emulateTouch
      >
        <div>
          <img src={assets.hero1} alt="Slide 1" />
        </div>
        <div>
          <img src={assets.hero2} alt="Slide 2" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
