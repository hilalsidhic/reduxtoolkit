import React from 'react'
import getlist from '../api/getlist'
import Indexbutton from '../Button'
import "./Listproducts.css"

import { useSelector } from 'react-redux';
// import { increment,decrement,AddtoCart } from '../redux/cart';

const Listproducts = () => {
  // const [count, setCount] = useState(false);
  // const {counter} = useSelector(state => state.cart);

  return (
    <div className='listproduct-container'>
        {getlist.map((item,key) => (
            <div className = "card">
                <h1>{item?.name}</h1>
                <img src={item?.url} alt="product"/>
                <Indexbutton product = {item}/>
            </div>
        ))}
    </div>
  )
}

export default Listproducts