import React, { useMemo } from 'react'
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai'
import { increment,decrement } from '../redux/cart';
import { useDispatch,useSelector } from 'react-redux';

const Activebutton = ({product}) => {
    
    const dispatch = useDispatch();
    const {cartList} = useSelector(state => state.cart);
    const cartListproduct = useMemo(() => 
    cartList?.find(item => item?.id === product?.id)
    , [cartList])
    const count = cartListproduct?.count;
  return (
    <div style={{fontSize: '32px',alignItems:'center',padding: '5px',display:'flex',justifyContent: 'space-between'}}>
      <AiOutlineMinusCircle style={{color: 'white'}} onClick={()=>dispatch( decrement(product) )}/>
      <span>{count}</span>
      <AiOutlinePlusCircle style={{color: 'white'}} onClick={()=> dispatch( increment(product) )}/>
    </div>
  )
}

export default Activebutton