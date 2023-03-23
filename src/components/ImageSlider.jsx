import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { StyledCarousel } from '../theme/StyledCarousel';
import IMG1 from "../assets/img/outside-2.jpg";
import IMG2 from "../assets/img/inside-2.jpg";
import IMG3 from "../assets/img/inside-1.jpg";
import IMG4 from "../assets/img/inside-3.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const ImageSlider = () => {
  return (
    <StyledCarousel>
      <Carousel
        className='carousel'
        responsive={responsive}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
      >
        <img src={IMG1} alt='itemIMG' />
        <img src={IMG2} alt='itemIMG' />
        <img src={IMG3} alt='itemIMG' />
        <img src={IMG4} alt='itemIMG' />
      </Carousel>
    </StyledCarousel>
  )
}
