import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => (
  <nav>
    <ul className={styles.wrapper}>
      <li>
        <NavLink exact
          activeClassName={styles.active}
          to="/"
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink 
          activeClassName={styles.active}
          to="/edit"
        >
          Edit
        </NavLink>
      </li>
      <li>
        <NavLink 
          activeClassName={styles.active}
          to="/add"
        >
          Add
        </NavLink>
      </li>
      <li>
        <NavLink 
          activeClassName={styles.active}
          to="/list"
        >
          List
        </NavLink>
      </li>
      <li>
        <NavLink 
          activeClassName={styles.active}
          to="/settings"
        >
          Settings
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Header