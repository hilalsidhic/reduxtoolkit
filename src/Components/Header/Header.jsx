import React from 'react'
import "./Header.css" 
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="container">
        <header>
            Redux Shop
        </header>
        <FaShoppingCart className="logo"/>
    </div>
  )
}

export default Header