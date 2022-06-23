import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavLogo from './assets/img/NavLogo1.png'

export default function MainNavbar() {
  return (
      <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
        <Container>
        <LinkContainer to='/'>
            <Navbar.Brand><img alt='' src={NavLogo}  width='140vw' className='d-inline-block align-top' /></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <LinkContainer to='/puppies'>
                <Nav.Link>Available Puppies</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/studs'>
                <Nav.Link>Available Studs</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
