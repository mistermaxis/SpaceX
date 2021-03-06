import React from 'react';
import { NavLink } from 'react-router-dom';
import Planet from './planet.png';
import './navbar.css';

const Navbar = () => (
  <div className="d-flex justify-content-center">
    <nav className="navbar nav border-bottom border-secondary">
      <div className="header-container">
        <img className="logo" src={Planet} alt="logo" />
        <h2>Space Travelers&apos; Hub</h2>
      </div>
      <menu className="menu">
        <NavLink className="left-link" to="/">Rockets</NavLink>
        <NavLink className="center-link" to="missions">Missions</NavLink>
        <div className="v-line" />
        <NavLink className="right-link" to="profile">My Profile</NavLink>
      </menu>
    </nav>
  </div>
);

export default Navbar;
