import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../assets/img/FrenchiePuppy1.jpg';
import EmailModal from './EmailModal';

export default function Puppy() {
  let puppyData = [
    {
      name: 'Acorn',
      sex: 'Male',
      color: 'Blue',
      price: '$6500',
    },
    {
      name: 'Bella',
      sex: 'Female',
      color: 'Platinum',
      price: '$8500',
    },
    {
      name: 'Bubba',
      sex: 'Male',
      color: 'brown',
      price: '$4500',
    },
    {
      name: 'Max',
      sex: 'Male',
      color: 'brown',
      price: '$5500',
    },
    {
      name: 'Poncho',
      sex: 'Male',
      color: 'blue',
      price: '$7500',
    },
    {
      name: 'Peanut',
      sex: 'Male',
      color: 'brown',
      price: '$4500',
    }
  ]

  return (
    <div className='puppy'>
      <Container className='puppyContainer'>
        <Row>
          {puppyData.map((puppy) => (
            <Col sm>
              <Card bg='dark' key='dark' text='white' className='puppyCard' style={{ width: '15rem'}}>
                <Card.Img variant='top' src={image} />
                <Card.Body>
                  <Card.Title>{puppy.name}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>{puppy.sex}</Card.Subtitle>
                  <Card.Text>
                    {puppy.name} is a {puppy.color} frenchie! Some quick example text where a short
                    description of the puppy could go.
                  </Card.Text>
                  <Card.Subtitle className='mb-2 text-muted'>Price: {puppy.price}</Card.Subtitle>
                  <EmailModal/>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
