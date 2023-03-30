import React, { useState } from 'react'
import { StyledNavbar } from '../theme/StyledNavbar'
import { getShippingLocations } from '../controllers/appControlers';
import { PAINT_SHOP_INFO } from '../data/data';
import ShippingSVG from "../assets/svg/shipping.svg";
import InstagramSVG from "../assets/svg/instagram.svg";
import FacebookSVG from "../assets/svg/facebook.svg";
import MenuSVG from "../assets/svg/menu.svg";
import CrossSVG from "../assets/svg/cross.svg";
import LogoIMG from "../assets/img/transparent-logo.png";


const { social_networks } = PAINT_SHOP_INFO;

export const Navbar = ({ second }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu)
  };

  return (
    <StyledNavbar style={{ position: second ? "initial" : "fixed", opacity: second ? 0 : 1, zIndex: second ? -999 : 999 }}>
      <div className='topNavbar'>
        <img className="shippingSVG" src={ShippingSVG} alt='shippingSVG' />
        <h4>Envíos a domicilio sin cargo:</h4>
        <p>{getShippingLocations()}</p>
      </div>
      <div className='bottomNavbar'>
        <img className='logoIMG' src={LogoIMG} alt="logoIMG" />
        <button className="openBtn" onClick={toggleMenu}>
          <img className='menuSVG' src={MenuSVG} alt='menuSVG' />
        </button>
        <nav className={`${menu ? "isActive" : ""}`}>
          <button className="closeBtn" onClick={toggleMenu}>
            <img className='crossSVG' src={CrossSVG} alt='crossSVG' />
          </button>
          <ul className='leftUlNav'>
            <li>
              <a className="leftNavItem" href="#location">Ubicación</a>
            </li>
            <li>
              <a className="leftNavItem" href="#">Contacto</a>
            </li>
          </ul>
          <ul className='rightUlNav'>
            <li>
              <a href={social_networks.instagram} target="_blank" rel='noreferrer'>
                <img className='instagramSVG' src={InstagramSVG} alt="InstagramSVG" />
              </a>
            </li>
            <li>
              <a href={social_networks.facebook} target="_blank" rel='noreferrer'>
                <img className='facebookSVG' src={FacebookSVG} alt="FacebookSVG" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </StyledNavbar >
  )
}
