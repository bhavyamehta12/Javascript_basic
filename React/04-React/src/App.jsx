// // // import React from 'react'
// // import { useState, useCallback, Children } from 'react'

// // const App = () => {
// //   const [count, setCount] = useState();
// //   const handelClick = useCallback(() => {
// //     console.log('Button clicked')
// //   },[])
// //   return (
// //     <div>
// //       <button onClick={()=>setCount(prev=>prev+1)} >{count}</button>
// //       <Children count={count} onClick={handelClick} />
// //     </div>
// //   )
// // }

// // export default App
// import React from 'react'
// import Headers from './components/Headers.jsx'
// import Body from './components/Body.jsx/index.js'
// import Footer from './components/Footer.jsx/index.js'
// import { useState } from 'react'
// import { createContext } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0);
//   const createcontext = createContext();
//   return (
//     <div>
//       <createContext value={{count, setCount}}>
//       <Headers />
//       <Body/>
//       <Footer/>
//       </createContext>
//     </div>
//   )
// }

// export default App
