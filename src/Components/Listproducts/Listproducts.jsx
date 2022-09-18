import React, { useState } from 'react'
import getlist from '../api/getlist'
import Activebutton from '../Button/Activebutton'
import Passivebutton from '../Button/Passivebutton'
import "./Listproducts.css"
const Listproducts = () => {
  const [count, setCount] = useState(false);
  return (
    <div className='listproduct-container'>
        {getlist.map((item,key) => (
            <div className = "card">
                <h1>{item.name}</h1>
                <img src={item.url} alt="product"/>
                {count?<Activebutton/>:<Passivebutton/>}
            </div>
        ))}
    </div>
  )
}

export default Listproducts