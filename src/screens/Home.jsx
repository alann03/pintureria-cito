import React from 'react'
import { BrandsSlider } from '../components/BrandsSlider'
import { ImageSlider } from '../components/ImageSlider'
import { Navbar } from '../components/Navbar'
import { StyledSchedule } from '../theme/StyledSchedule'

export const Home = () => {

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
          window.screen.width <= 550 && <BrandsSlider />
        }
      </section>
      {
        window.screen.width > 550 && <BrandsSlider />
      }
      <div style={{ height: 1000 }}></div>
      <div style={{ height: 1000 }}></div>
      <div style={{ height: 1000 }}></div>
      <div style={{ height: 1000 }}></div>
    </>
  )
}
