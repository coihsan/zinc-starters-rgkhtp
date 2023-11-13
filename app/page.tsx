import Image from 'next/image'
import Countdown from './default/Countdown'
import Hero from './default/Hero'
import PriceCard from './default/PriceCard'
import Testimonial from './default/Testimonial'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <PriceCard />
      <Countdown />
      <Testimonial />
    </main>
  )
}
