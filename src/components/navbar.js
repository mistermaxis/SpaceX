import { NavLink } from 'react-router-dom';
import Planet from './planet.png';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={Planet} alt="" />
        <h1>Space Traveler's Hub</h1>
      </div>
      <menu className="menu">
        <NavLink activeClassName="active" to="/">Rockets</NavLink>
        <NavLink activeClassName="active" to="missions">Missions</NavLink>
        <NavLink activeClassName="active" to="missions">My Profile</NavLink>
      </menu>
    </nav>
  );
}
 
export default Navbar;