import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [counterbutton, setCounterbutton] = useState(0);
  function handleIncrease(){
    setCount(prev=>prev+1)
    setCounterbutton(prev=>prev+1)
  }
  function handleDecrease(){
    setCount(count=>Math.max(0,count-1))
    setCounterbutton(prev=>prev+1)
  }
  function handleStepup(){
    setCount(prev=>prev+step)
    setCounterbutton(prev=>prev+1)
  }
  function handleStepdown(){
    setCount(count=>Math.max(0,count-step))
    setCounterbutton(prev=>prev+1)
  }
  function handleIncreaseby10(){
    setCount(prev=>prev+10)
    setCounterbutton(prev=>prev+1)
  }
  function handleReset(){
    setCount(0)
    setCounterbutton(prev=>prev+1)
  }
  return (
    <div>
      <p>{count}</p>
      <p> {count%2===0?"Even":"Odd"} </p>
      <button onClick={handleIncrease} >Increase</button>
      <button onClick={handleDecrease}>
  Decrease
</button>
      <button onClick={handleReset}>Reset</button>
      <input type='number' value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
      <button onClick={handleStepup}>+</button>
      <button onClick={handleStepdown}>-</button>
      <button onClick={handleIncreaseby10}>Increase by 10</button>
      <p>Clicked buttons : {counterbutton}</p>    
        
    </div>
  )
}

export default App
