import React from 'react';
import { PAINT_SHOP_INFO } from "../data/data";
import { StyledContact } from '../theme/StyledContact';
import PhoneSVG from "../assets/svg/call.svg";
import InstagramSVG from "../assets/svg/instagram.svg";
import FacebookSVG from "../assets/svg/facebook.svg";

const { contact, social_networks } = PAINT_SHOP_INFO;

export const Contact = () => {
  return (
    <StyledContact>
      <h2>Contactános</h2>
      <div className='socialNetworksContainer'>
        <p className='socialNetwork'>
          <img src={PhoneSVG} alt='PhoneSVG' />
          {contact.phone_number}
        </p>
        <p className='socialNetwork'>
          <a href={social_networks.instagram} target="_blank" rel='noreferrer' >
            <img src={InstagramSVG} alt='InstagramSVG' />
          </a>
          pintureriacito
        </p>
        <p className='socialNetwork'>
          <a href={social_networks.facebook} target="_blank" rel='noreferrer' >
            <img src={FacebookSVG} alt='FacebookSVG' />
          </a>
          cito pintureria
        </p>
      </div>
      <div className='emailForm'>
        <h3>Enviános tu consulta</h3>
        <form
          action="https://formspree.io/f/xjvdawjw"
          method="POST"
        >
          <input type="text" placeholder="Nombre" name="name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea disabled={false} name="message" cols="35" rows="10" placeholder="Mensaje" required />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </StyledContact>
  )
}
