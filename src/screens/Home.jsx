import React from 'react'
import { BrandsSlider } from '../components/BrandsSlider'
import { ImageSlider } from '../components/ImageSlider'
import { StyledSchedule } from '../theme/StyledSchedule'
import { Location } from '../components/Location'
import { Navbar } from '../components/Navbar'
import { Shipping } from '../components/Shipping'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import useScreenSize from '../hooks/useResize'
import { WhatsappButton } from '../components/WhatsappButton'

export const Home = () => {

  const { width } = useScreenSize();

  return (
    <>
      <Navbar second={false} />
      <section style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar second={true} />
        <ImageSlider />
        <StyledSchedule>
          <h2>¡Abierto ahora!</h2>
          <p>Hasta las 19:00</p>
        </StyledSchedule>
        {
          width <= 550 && <BrandsSlider />
        }
      </section>
      {
        width > 550 && <BrandsSlider />
      }
      <Location />
      <Shipping />
      <Contact />
      <Footer />
      <WhatsappButton phone={5491131149056} formattedMessage="" />
    </>
  )
}
