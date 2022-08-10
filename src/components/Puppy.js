import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from '../assets/img/FrenchiePuppy1.jpg'
import EmailModal from './EmailModal'

import video1 from '../assets/video/Video5.MP4'
import video2 from '../assets/video/Video6.MP4'
import video3 from '../assets/video/Video7.MP4'
import video4 from '../assets/video/Video8.MP4'
import poster2 from '../assets/img/IMG_8081.jpg'
import poster1 from '../assets/img/IMG_8082.jpg'
import poster4 from '../assets/img/IMG_8083.jpg'
import poster3 from '../assets/img/IMG_8084.jpg'


export default function Puppy() {
  let puppyData = [
    // {
    //   name: 'Acorn',
    //   sex: 'Male',
    //   color: 'Blue',
    //   price: '$6500',
    // }
  ]

  return (
    <div className='puppy'>
      <div>
        <video
          src={video1}
          width='300'
          height='600'
          controls='controls'
          autoPlay={false}
          poster={poster1}
          loop
          muted
        />
      </div>
      <div>
        <video
          src={video2}
          width='300'
          height='600'
          controls='controls'
          autoPlay={false}
          poster={poster2}
          loop
          muted
        />
      </div>
      <div>
        <video
          src={video3}
          width='300'
          height='600'
          controls='controls'
          autoPlay={false}
          poster={poster3}
          loop
          muted
        />
      </div>
      <div>
        <video
          src={video4}
          width='300'
          height='600'
          controls='controls'
          autoPlay={false}
          poster={poster4}
          loop
          muted
        />
      </div>
      <Container className='puppyContainer'>
        <Row>
          {puppyData.map((puppy) => (
            <Col sm>
              <Card
                bg='dark'
                key='dark'
                text='white'
                className='puppyCard'
                style={{ width: '15rem' }}>
                <Card.Img variant='top' src={image} />
                <Card.Body>
                  <Card.Title>{puppy.name}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>{puppy.sex}</Card.Subtitle>
                  <Card.Text>{puppy.color}</Card.Text>
                  <Card.Subtitle className='mb-2 text-muted'>Price: {puppy.price}</Card.Subtitle>
                  <EmailModal />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
