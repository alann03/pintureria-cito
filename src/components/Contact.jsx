import React, { useState } from 'react';
import { formValidate } from "../controllers/appControlers";
import { PAINT_SHOP_INFO } from "../data/data";
import { StyledContact } from '../theme/StyledContact';
import PhoneSVG from "../assets/svg/call.svg";
import InstagramSVG from "../assets/svg/instagram.svg";
import FacebookSVG from "../assets/svg/facebook.svg";

const { contact, social_networks } = PAINT_SHOP_INFO;

export const Contact = () => {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      formValidate(
        {
          ...input,
          [e.target.name]: e.target.value,
        },
      ),
    );
  };

  return (
    <StyledContact id="contact">
      <h2>Contactanos</h2>
      <div className='socialNetworksContainer'>
        <p className='socialNetwork'>
          <a href={`tel:+5491131149056`}>
            <img src={PhoneSVG} alt='PhoneSVG' />
          </a>
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
        <h3>Envianos tu consulta</h3>
        <form
          action="https://formspree.io/f/xjvdawjw"
          method="POST"
        >
          <input type="text" placeholder="Nombre" name="name" value={input.name} onChange={e => handleChange(e)} required />
          {errors.name && <p className='error'>{errors.name}</p>}
          <input type="email" name="email" placeholder="Email" value={input.email} onChange={e => handleChange(e)} required />
          {errors.email && <p className='error'>{errors.email}</p>}
          <textarea disabled={false} name="message" cols="35" rows="10" placeholder="Mensaje" value={input.message} onChange={e => handleChange(e)} required />
          {errors.message && <p className='error'>{errors.message}</p>}
          <button
            type="submit"
            disabled={Object.entries(errors).length === 0 ? false : true}
            className={(input.name.length > 0 && input.email.length > 0 && input.message.length > 0) && Object.entries(errors).length === 0 ? "buttonSubmit" : "disabledButtonSubmit"}
          >
            Enviar
          </button>
        </form>
      </div>
    </StyledContact>
  )
}
