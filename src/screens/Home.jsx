import React from 'react'
import { ImageSlider } from '../components/ImageSlider'
import { Navbar } from '../components/Navbar'
import { StyledSchedule } from '../theme/StyledSchedule'

export const Home = () => {
  return (
    <>
      <Navbar second={false} />
      <Navbar second={true} />
      <ImageSlider />
      <StyledSchedule>
        <h2>¡Abierto ahora!</h2>
        <p>Hasta las 19:00</p>
      </StyledSchedule>
      {/* <div style={{ height: 1000 }}></div>
      <div style={{ height: 1000 }}></div>
      <div style={{ height: 1000 }}></div>
      <div style={{ height: 1000 }}></div> */}
    </>
  )
}
