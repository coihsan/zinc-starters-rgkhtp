import Image from 'next/image'
import Hero from './default/Hero'
import Feature from './default/Feature'
import PriceCard from './default/PriceCard'
import Countdown from './ui/Countdown'
import Testimonial from './default/Testimonial'
import Header from './default/Header'
import GoogleMaps from './ui/GoogleMaps'
import Channel from './default/Channel'
import FAQ from './default/FAQ'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Feature />
      <PriceCard />
      <Countdown />
      <Channel />
      {/* <GoogleMaps /> */}
      <Testimonial />
      <FAQ />
    </main>
  )
}
