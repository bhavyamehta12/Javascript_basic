// // // import Header from './Components/Header'
// // // import ProductLists from './Components/ProductLists'
// // // import Footer from './Components/Footer'

// // // const App = () => {
// // //   return (
// // //     <>
// // //      <Header/>
// // //      <ProductLists/>
// // //      <Footer/>
// // //     </>
// // //   )
// // // }

// // // export default App
// // import React from 'react'
// // import { useState } from 'react'

// // const App = () => {
// //   const [count,setCount] = useState(0)
// //   return (
// //     <div>
// //       <p>{count}</p>
// //       <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
// //       <button onClick={()=>setCount(prev=>prev-1)}>Decrease</button>
// //       <button onClick={()=>setCount(prev => Math.max(0, prev - 1))}>Reset</button>
// //     </div>
// //   )
// // }

// // export default App
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [user,setUser]=useState({
//     name:"Bhavya",
//     age:21,
//     City:"Ahmedabad"
//   }) 
//   return (
//     <div>
//       <p>User Profile</p>
//       <p>{user.name}</p>
//       <p>{user.age}</p>
//       <p>{user.City}</p>
//       <button onClick={()=>setUser(prev => ({
//         ...prev,
//         age: prev.age + 1
//       }))}>Increase Age</button>
//       <button onClick={() => setUser(prev=>({
//         ...prev,
//         city:"Mumbai"
//       }))}>Change City</button>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [user,setUser] = useState([
    {
      name:"Bhavya",
      age:22
    },
    {
      name:"Krish",
      age:43
    }
  ])
  return (
    <div>
      <p>{user}</p>
    </div>
  )
}

export default App
