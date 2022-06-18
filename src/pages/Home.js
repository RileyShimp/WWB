import CarouselHeader from '../components/CarouselHeader'
import Contact from './Contact'
import Puppies from './Puppies'
import Studs from './Studs'

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
