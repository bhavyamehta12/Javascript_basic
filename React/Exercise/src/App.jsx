// // import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useRef } from 'react';


// const App = () => {
//   const [count, setCount] = useState(0);
//   const prevref = useRef()
//   useEffect(() => {
//     prevref.current = count
//   }, [count]);
//   return (
//     <div>
//       <p>Current : {count}</p>
//       <p>Previous Value : {prevref.current} </p>
//       <button onClick={()=>setCount(count+1)}>Increase</button>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const App = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  return (
    <div>
      
    </div>
  )
}

export default App
