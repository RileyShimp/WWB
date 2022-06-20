import StudList from '../components/StudList'
import WWBLogo2 from '../assets/img/IMG_7217.PNG'
import WWBLogo3 from '../assets/img/IMG_7219.PNG'

export default function Studs() {
  return (
    <div className='studs'>
      <div className='ContactHeader'>
        <h1
          style={{
            fontSize: '9vw',
            textShadow: '2px 2px white',
            maxWidth: '100%',
            paddingBottom: '0',
            marginBottom: '0',
          }}>
          <img style={{ width: '16vw', maxWidth: '800px' }} alt='Third slide' src={WWBLogo2} />
          Available Studs!
          <img style={{ width: '23vw', maxWidth: '800px' }} alt='Third slide' src={WWBLogo3} />
        </h1>
      </div>
      <StudList />
    </div>
  )
}
