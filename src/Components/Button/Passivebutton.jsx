import React from 'react'
import {  AddtoCart } from '../redux/cart'
import { useDispatch } from 'react-redux'
const Passivebutton = ({product}) => {
    const dispatch = useDispatch();
    // const {counter} = useSelector(state => state.cart);
  return (
    <div style={{fontSize: '32px',display:'flex',justifyContent: 'center'}}>
      <button style={{fontSize: '21px'}} onClick={() => dispatch(AddtoCart(product))}>
        ADD TO CART
      </button>
    </div>
  )
}

export default Passivebutton