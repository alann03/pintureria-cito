import React from 'react';
import { StyledFooter } from "../theme/StyledFooter";
import GithubSVG from "../assets/svg/github.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <p className='copyright'>Copyright ©2023 Pinturerías CITO</p>
      <div>
        <p className='designedBy'>Diseñado por </p>
        <a href='https://github.com/alann03' target="_blank" rel='noreferrer'>
          <p className='designedBy name'>
            <img src={GithubSVG} alt='GithubSVG' />
            alanhuismann
          </p>
        </a>
      </div>
    </StyledFooter>
  )
}
