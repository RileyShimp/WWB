import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import image from '../assets/img/FrenchiePuppy1.jpg'

export default function Puppy() {
  return (
    <div className='puppy'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>Acorn</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>Female</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
