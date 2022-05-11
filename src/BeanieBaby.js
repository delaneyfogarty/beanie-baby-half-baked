import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    <>
      <Link to={`/beanie-babies/${beanieBaby.id}`}>Detail Page</Link>
      <h1>{beanieBaby.title}</h1>
      <img src={beanieBaby.image}></img>
    </>
  );
}
// it should also render the beanie baby's image and show the beanie baby's name
// this should contain a react-router-dom Link to the detail page for this particular beanie
