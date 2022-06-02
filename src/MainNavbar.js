import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export default function MainNavbar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Worldwide Bullies</Navbar.Brand>
        </LinkContainer>
        <Nav className='me-auto'>
          <LinkContainer to='/puppies'>
            <Nav.Link>Puppies</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/studs'>
            <Nav.Link>Studs</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/contact'>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  )
}
