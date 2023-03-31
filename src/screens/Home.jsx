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
import { getOpenOrClosedData } from '../controllers/appControlers'
import { PAINT_SHOP_INFO } from '../data/data'

export const Home = () => {

  const { width } = useScreenSize();
  const { open, day } = getOpenOrClosedData();
  const { schedule } = PAINT_SHOP_INFO;

  return (
    <>
      <Navbar second={false} />
      <section style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar second={true} />
        <ImageSlider />
        <StyledSchedule>
          <h2>{open ? "¡Abierto ahora!" : "Cerrado ahora"}</h2>
          {
            open && <p>{`Hasta las ${day === "Sat" ? schedule.saturday.closing : schedule.monday_to_friday.closing}`}</p>
          }
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
