import React from 'react'
import { useSelector } from 'react-redux';
import Activebutton from './Activebutton';
import Passivebutton from './Passivebutton';
export {default as Activebutton} from './Activebutton';
export {default as Passivebutton} from './Passivebutton';

const Indexbutton = ({product}) => {
    const cart = useSelector(state => state.cart.cartList);
    const isExist = cart.find((item) => item.id === product.id);
    // const currentCount = isExist.count;
  return (
    <>{isExist ? <Activebutton product={product} /> : <Passivebutton product={product} />}</>
  )
}

export default Indexbutton