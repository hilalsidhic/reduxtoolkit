import React from 'react'
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai'
const Activebutton = () => {
  const [count, setCount] = React.useState(1);
  return (
    <div style={{fontSize: '32px',alignItems:'center',padding: '5px',display:'flex',justifyContent: 'space-between'}}>
      <AiOutlineMinusCircle style={{color: 'white'}} onClick={()=>setCount(count-1)}/>
      <span>{count}</span>
      <AiOutlinePlusCircle style={{color: 'white'}} onClick={()=>setCount(count+1)}/>
    </div>
  )
}

export default Activebutton