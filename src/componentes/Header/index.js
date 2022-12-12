/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Nike from '../../images/Nike.jpg';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className='logo'>
          <img src={Nike} alt="logo" width="150" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <a href="/productos">PRODUCTOS</a>
        </li>
      </ul>
      <div className='cart'>
        <box-icon name="cart"></box-icon>
        <span className="item__total">0</span>
      </div>
    </header>
  )
}

export default Header
