import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/img/headerPhoto1.jpg'
import image2 from '../assets/img/headerPhoto2.jpg'
import image3 from '../assets/img/headerPhoto3.jpg'

export default function CarouselHeader() {
  return (
    <div className='Carousel'>
      <Carousel  style={{ color: '#14213d', fontWeight: 400}}>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image1}
            alt='First slide'
          />
          <Carousel.Caption style={{ top: '0', fontWeight:'700' }}>
            <h3>Wordwide Bullies</h3>
            <p>AKC registered puppies and studs</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image3}
            alt='Second slide'
          />

          <Carousel.Caption style={{ top: '0', fontWeight:'700'}}>
            <h3>We make it easy!</h3>
            <p>Check out our available puppies. Send us an email if you interested in adopting! </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image2}
            alt='Third slide'
          />

          <Carousel.Caption style={{ top: '0', fontWeight:'700' }}>
            <h3>Studs Available</h3>
            <p>We have a variety of studs available, check the studs page for more info!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
