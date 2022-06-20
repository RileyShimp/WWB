import Card from 'react-bootstrap/Card'
import EmailModal from './EmailModal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from '../assets/img/FrenchiePuppy1.jpg'

export default function StudList() {
  let puppyData = [
    {
      name: 'Dracula',
      sex: 'Male',
      color: 'Visual Fluffy L4 Cream carrier',
      price: '$3000',
    },
    {
      name: 'Chewbacca',
      sex: 'Male',
      color: 'Lilac Visual Fluffy L4',
      price: '$3000',
    },
    {
      name: 'Spawn',
      sex: 'Male',
      color: '',
      price: '$1500',
    },
    {
      name: 'Smoke',
      sex: 'Male',
      color: '',
      price: '$1500',
    },
    {
      name: 'Ghost',
      sex: 'Male',
      color: 'Lilac Maskless stud available',
      price: '$1500',
    },
    {
      name: 'Milo',
      sex: 'Male',
      color: '',
      price: '$2000',
    },
    {
      name: 'Saint',
      sex: 'Male',
      color: 'Isabella stud available',
      price: '$2500',
    }
  ]

  return (
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
    </div>
  )
}
