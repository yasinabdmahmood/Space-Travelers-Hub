import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

import style from './navbar.module.css';

function Navbar() {
  return (
    <nav className={style.navbar} data-testid="main-container">
      <div>
        <img className={style.logo} alt="logo" src={logo} />
        <span>Space Travelers Hub</span>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : style.passive)}
            to="/"
            end
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : style.passive)}
            to="/missions"
            end
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : style.passive)}
            to="/profile"
            end
          >
            My profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
