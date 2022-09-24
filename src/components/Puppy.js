import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from '../assets/img/puppy2.jpeg'
import image2 from '../assets/img/IMG_1995.jpg'
import EmailModal from './EmailModal'
import PuppyVideos from './PuppyVideos/PuppyVideos'

export default function Puppy() {
  let puppyData = [
    // {
    //   name: 'Fluffy Carrier',
    //   sex: 'Female',
    //   color: 'Lilac x Cream',
    //   price: '$4500',
    // }
  ]

  return (
    <div>
      <div className='puppy'>
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
        <PuppyVideos />
      </div>
    </div>
  )
}
