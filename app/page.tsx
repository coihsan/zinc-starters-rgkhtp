import Image from 'next/image'
import Hero from './default/Hero'
import PriceCard from './default/PriceCard'
import Testimonial from './default/Testimonial'
import Header from './default/Header'
import GoogleMaps from './u/Header'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <PriceCard />
      <GoogleMaps />
      <Testimonial />
    </main>
  )
}
