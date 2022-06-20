import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../assets/img/FrenchiePuppy1.jpg';
import EmailModal from './EmailModal';

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
      <h1>
        Puppies from Milo coming soon...
      </h1>
      <h3>
        Contact for more info
      </h3>
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
                    {puppy.color}
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
