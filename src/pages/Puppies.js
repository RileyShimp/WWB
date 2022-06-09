import Puppy from "../components/Puppy";

export default function Puppies (){
  return (
  <div className="puppies">
    <h1 style={{ fontSize:'3rem' }}>Available Puppies!</h1>
    <Puppy/>
  </div>
  );
}