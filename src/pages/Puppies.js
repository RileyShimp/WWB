import Puppy from '../components/Puppy'

export default function Puppies() {
  return (
    <div className='puppies'>
      <h1 style={{ fontSize: '9vw', textShadow: '2px 2px white' }}>Available Puppies!</h1>
      <Puppy />
    </div>
  )
}
