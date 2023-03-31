import React from 'react';
import { StyledWhatsapp } from '../theme/StyledWhatsapp';
import WhatsappIMG from "../assets/img/whatsapp-logo.png";

export const WhatsappButton = ({ phone, formattedMessage }) => {
  return (
    <StyledWhatsapp>
      <a
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src={WhatsappIMG}
          alt="Whatsapp"
        />
      </a>
    </StyledWhatsapp>
  )
}
