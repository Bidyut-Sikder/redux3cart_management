import React from 'react';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const carts = useSelector(state => state.carts)
  const { cartsID } = carts

  // const totalProducts = carts.filter((value, index) => carts.indexOf(value) === index)

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <Link to="/" className="navHome" id="lws-home"> Home </Link>
          <Link to="/cart" className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{cartsID.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



















