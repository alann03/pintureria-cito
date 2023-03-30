import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { StyledBrands } from "../theme/StyledBrands";
import IMG1 from "../assets/img/brand-alba.png"
import IMG2 from "../assets/img/brand-cetol.png"
import IMG3 from "../assets/img/brand-rust-oleum.png"
import IMG4 from "../assets/img/brand-sherwin-williams.png"
import IMG5 from "../assets/img/brand-brikol.png"
import IMG6 from "../assets/img/brand-casablanca.png"
import IMG7 from "../assets/img/brand-plavicon.png"
import IMG8 from "../assets/img/brand-sinteplast.png"
import IMG9 from "../assets/img/brand-kuwait.png"
import IMG10 from "../assets/img/brand-revear.png"
import IMG11 from "../assets/img/brand-niveltex.png"
import IMG12 from "../assets/img/brand-sika.png"
import IMG13 from "../assets/img/brand-venier.png"
import IMG14 from "../assets/img/brand-tersuave.png"
import IMG15 from "../assets/img/brand-coltec.png"
import IMG16 from "../assets/img/brand-netcolor.png"
import IMG17 from "../assets/img/brand-halocide.png"
import IMG18 from "../assets/img/brand-colorin.png"
import IMG19 from "../assets/img/brand-duracril.png"
import IMG20 from "../assets/img/brand-maderin.png"
import IMG21 from "../assets/img/brand-megaflex.png"
import IMG22 from "../assets/img/brand-petrilac.png"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1366 },
    items: 9
  },
  tablet: {
    breakpoint: { max: 1365, min: 1000 },
    items: 6
  },
  mobile: {
    breakpoint: { max: 999, min: 0 },
    items: 4
  }
};

const BRANDS = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10, IMG11, IMG12, IMG13, IMG14, IMG15, IMG16, IMG17, IMG18, IMG19, IMG20, IMG21, IMG22];

export const BrandsSlider = () => {
  return (
    <StyledBrands>
      <h2 className='sectionTitle'>Nuestras marcas</h2>
      <Carousel
        className='carousel'
        responsive={responsive}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        arrows={false}
      >
        {
          BRANDS.map((brand, index) => {
            return (
              <div className='imageContainer' key={index}>
                <img src={brand} alt='itemIMG' />
              </div>
            )
          })
        }
      </Carousel>
    </StyledBrands>
  )
}
