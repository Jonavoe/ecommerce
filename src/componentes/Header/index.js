/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react'
import Nike from '../../images/Nike.jpg';
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

export const Header = () => {

  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;

  const toogleTrue = () => {
    setMenu(!menu)
}
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
      <div className='cart' onClick={toogleTrue}>
        <box-icon name="cart"></box-icon>
        <span className="item__total">{carrito.length}</span>
      </div>
    </header>
  )
}

export default Header
