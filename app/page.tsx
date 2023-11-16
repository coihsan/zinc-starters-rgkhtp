import Image from 'next/image'
import Hero from './default/Hero'
import Feature from './default/Feature'
import PriceCard from './default/PriceCard'
import Countdown from './ui/Countdown'
import Testimonial from './default/Testimonial'
import Header from './default/Header'
// import GoogleMaps from './ui/GoogleMaps'
import Channel from './default/Channel'
import FAQ from './default/FAQ'
import Content2 from './default/content/Content2'
import Content3 from './default/content/Content3'
import Content4 from './default/content/Content4'
export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Content2 />
      <Content3 />
      <Content4 />
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
