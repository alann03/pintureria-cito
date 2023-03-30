import React from 'react'
import { StyledLocation } from '../theme/StyledLocation';
import { PAINT_SHOP_INFO } from "../data/data";
import LocationSVG from "../assets/svg/map-marker.svg";
import LocationIMG from "../assets/img/location.png";

const { adress, schedule } = PAINT_SHOP_INFO;

export const Location = () => {
  return (
    <StyledLocation id='location'>
      <h2>Ubicación</h2>
      <p className='adress'>
        <img className='locationSVG' src={LocationSVG} alt='' />
        {adress}
      </p>
      <div className='imageContainer'>
        <a href="https://goo.gl/maps/fbrkkTUixrXFH5DUA" target="_blank" rel='noreferrer'>
          <img className='locationIMG' src={LocationIMG} alt="" />
        </a>
      </div>
      <div className='scheduleContainer'>
        <h4>Horario de atención</h4>
        <p className='schedule'>
          <span>Lunes a Viernes:</span>
          <span>{`${schedule.monday_to_friday.opening} - ${schedule.monday_to_friday.closing}`}</span>
        </p>
        <p className='schedule'>
          <span>Sábados:</span>
          <span>{`${schedule.saturday.opening} - ${schedule.saturday.closing}`}</span>
        </p>
      </div>
    </StyledLocation>
  )
}
