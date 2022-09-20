import React from 'react'
import "./Header.css" 
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Header = () => {
  const {cartList} = useSelector(state => state.cart);
  var sum = 0;
  cartList.forEach((cart) =>{
    sum += cart.count;
  })
  return (
    <div className="container">
        <header>
            Redux Shop
        </header>
        <div className="logo">
          <FaShoppingCart />
          {sum>0 && <span>{sum}</span>}
        </div>
    </div>
  )
}

export default Header