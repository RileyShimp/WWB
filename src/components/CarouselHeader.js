import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/img/headerPhoto1.jpeg'
import image2 from '../assets/img/headerPhoto2.jpeg'
import image3 from '../assets/img/headerPhoto4.jpeg'
import NavLogo from '../assets/img/NavLogo1.png'

export default function CarouselHeader() {
  return (
    <div className='Carousel'>
      <Carousel style={{ color: '#14213d', margin: '0 auto' }}>
              <Carousel.Item>
                <img className='d-block w-100' src={image2} alt='Third slide' />
      
                <Carousel.Caption
                  style={{
                    top: '0',
                    fontWeight: '700',
                    fontSize: '4vw',
                    color: '#8ecae6',
                    textShadow: '2px 2px #023047',
                  }}>
                  <img style={{ width: '40vw', maxWidth: '800px' }} alt='Third slide' src={NavLogo} />
                </Carousel.Caption>
              </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={image3} alt='Second slide' />

          <Carousel.Caption
            style={{
              // top: '0',
              fontWeight: '700',
              fontSize: '4vw',
              color: '#ffd60a',
              textShadow: '3px 3px #023047',
            }}>
            <h3 style={{ fontWeight: '700', fontSize: '6vw' }}>We Got Puppies!</h3>
            <p>Contact us if you interested in adopting! </p>
          </Carousel.Caption>
        </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={image1} alt='First slide' />
              <Carousel.Caption
                style={{
                  fontWeight: '700',
                  fontSize: '4vw',
                  color: '#ffd60a',
                  textShadow: '3px 3px #023047',
                }}>
                <h3 style={{ fontWeight: '700', fontSize: '7vw' }}>Wordwide Bullies</h3>
                <p>AKC registered puppies and studs</p>
              </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    </div>
  )
}
