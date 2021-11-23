import { NavLink } from 'react-router-dom';
import Planet from './planet.png';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div>
      <img className="logo" src={Planet} alt="" />
      <h1>Space Traveler&aposs Hub</h1>
    </div>
    <menu className="menu">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="missions">Missions</NavLink>
      <NavLink to="missions">My Profile</NavLink>
    </menu>
  </nav>
);

export default Navbar;
