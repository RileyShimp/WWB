import EmailForm from '../components/EmailForm'
import WWBLogo from '../assets/img/IMG_7218.PNG'
import WWBLogo2 from '../assets/img/IMG_7217.PNG'
import WWBLogo3 from '../assets/img/IMG_7219.PNG'
import Button from 'react-bootstrap/Button'

export default function Contact() {
  return (
    <div>
      <div className='ContactHeader'>
        <h1
          style={{
            fontSize: '9vw',
            textShadow: '2px 2px white',
            maxWidth: '100%',
            paddingBottom: '0',
            marginBottom: '0',
          }}>
          <img style={{ width: '19vw', maxWidth: '800px' }} alt='Third slide' src={WWBLogo2} />
          Contact Us!
          <img style={{ width: '25vw', maxWidth: '800px' }} alt='Third slide' src={WWBLogo3} />
        </h1>
      </div>
      <div className='Contact'>
        {/* <EmailForm /> */}
        <h1>(971)-707-0809</h1>
        <Button
          style={{ marginBottom: '100px', width: '50vw', maxWidth: '500px' }}
          href='tel:+19717070809'
          variant='primary'>
          Call or Text
        </Button>
        <img
          style={{ width: '90vw', maxWidth: '800px', paddingRight: '15vw' }}
          alt='Third slide'
          src={WWBLogo}
        />
      </div>
    </div>
  )
}
