import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const App = () => {
    const [count, setCount] = useState(0);
    const [render, setRender] = useState(0);
    const prevCount = useRef(count);
    useEffect(()=>{
        prevCount.current = count;
    },[count])
  return (
    <div>
      <p>Count is : {count}</p>
      <p>{count%2==0?"Even":"Odd"}</p>
      <p>{prevCount.current}</p>
      <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
      <button onClick={()=>setCount(prev=>prev-1)}>Decrease</button>
      <button onClick={()=>setCount(prev=>prev+5)}>Increase by 5</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      {count>=10?"Goal Reached":""}
    </div>
  )
}

export default App
