import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import { useTheme } from '../hook/useTheme';


// Styels
import './Navbar.css'





export default function Navbar() {

  const { color } = useTheme()

  return (
    <div className='navbar' style={{ background: color }}>
      <nav>
        <Link to="/" className='brand'>
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
