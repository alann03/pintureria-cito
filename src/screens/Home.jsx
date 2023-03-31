import React from 'react'
import { BrandsSlider } from '../components/BrandsSlider'
import { Contact } from '../components/Contact'
import { ImageSlider } from '../components/ImageSlider'
import { Location } from '../components/Location'
import { Navbar } from '../components/Navbar'
import { Shipping } from '../components/Shipping'
import useScreenSize from '../hooks/useResize'
import { StyledSchedule } from '../theme/StyledSchedule'

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
      <div style={{ height: 300, backgroundColor: "#AAAAAA" }}></div>
    </>
  )
}
