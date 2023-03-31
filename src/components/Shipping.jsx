import React from 'react';
import { getShippingLocations } from '../controllers/appControlers';
import { StyledShipping } from '../theme/StyledShipping';
import ShippingSVG from "../assets/svg/shipping-2.svg";

export const Shipping = () => {
  return (
    <StyledShipping>
      <p className='title'>
        <img src={ShippingSVG} alt='ShippingSVG' />
        Envíos a domicilio sin cargo:
      </p>
      <p className='locations'>{getShippingLocations()}</p>
    </StyledShipping>
  )
}
