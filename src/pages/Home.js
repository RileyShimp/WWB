import CarouselHeader from '../components/CarouselHeader'
import Contact from './Contact'
import Puppies from './Puppies'
import Studs from './Studs'
import WWBLogo from '../assets/img/IMG_7218.PNG'

export default function Home() {
  return (
    <div>
      <CarouselHeader />
        <Puppies />
        <Studs />
        <Contact />
    </div>
  )
}
