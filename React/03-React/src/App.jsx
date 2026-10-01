// // // import User from "./components/User";
// // // import ProductCards from "./Components/ProductCards";

// // // const App = () => {
// // //   const name = "Bhavya";
// // //   const age = 20;
// // //   const city = "New York";
// // //   const product ={
// // //     name:"Krish",
// // //     price:2300,
// // //     brand:"Iphone 13",
// // //     available:false
// // //   }
// // //   return (
// // //     <div>
// // //       <User name={name} age={age} city={city} />
// // //       <ProductCards product={product} />
// // //     </div>
// // //   )
// // // }

// // // export default App
// // import React, { useState } from 'react'
// // import Counter from './Components/Counter';

// // const App = () => {
// //   const [count, setCount] = useState(0);
// //   return (
// //     <div>
// //       <Counter count={count} onIncrease={() => setCount((prevCount) => prevCount + 1)}  onDecrease={()=>setCount((prevCount) => prevCount - 1)}/>
// //     </div>
// //   )
// // }

// // export default App
// // import React from 'react'
// import { useState } from 'react';
// import LoginButton from './Components/LoginButton';

// const App = () => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [user, setUser] = useState({});
//   function onLogin(user){
//     setIsLogged(true);
//     setUser(user);
//     return(
//       <p>Welcome, {user.username}!</p>
//     )
//   }
//   return (
//     <div>
//       <p>{isLogged ? "Logged In" : "Not Logged In"}</p>
//       <LoginButton  onLogin={onLogin}/>
//     </div>
//   )
// }

// // export default App
// import Student from './Components/Student.jsx';

// const App = () => {
//   const student = {
//   name: "Bhavya",
//   age: 21,
//   course: "BTech CE",
//   marks: 78
// };
//   return (
//     <div>
//       <Student student={student} />
//     </div>
//   )
// }

// export default App
import React from 'react'
import ProductCard from './Components/ProductCard'

const App = () => {
  const products = [
  { id: 1, name: "iPhone", price: 79999 },
  { id: 2, name: "Samsung", price: 74999 },
  { id: 3, name: "Pixel", price: 69999 }
]
  return (
    <div>
      <ProductCard products={products}/>
    </div>
  )
}

export default App
