// // // // // // import Header from './Components/Header'
// // // // // // import ProductLists from './Components/ProductLists'
// // // // // // import Footer from './Components/Footer'

// // // // // // const App = () => {
// // // // // //   return (
// // // // // //     <>
// // // // // //      <Header/>
// // // // // //      <ProductLists/>
// // // // // //      <Footer/>
// // // // // //     </>
// // // // // //   )
// // // // // // }

// // // // // // export default App
// // // // // import React from 'react'
// // // // // import { useState } from 'react'

// // // // // const App = () => {
// // // // //   const [count,setCount] = useState(0)
// // // // //   return (
// // // // //     <div>
// // // // //       <p>{count}</p>
// // // // //       <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
// // // // //       <button onClick={()=>setCount(prev=>prev-1)}>Decrease</button>
// // // // //       <button onClick={()=>setCount(prev => Math.max(0, prev - 1))}>Reset</button>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App
// // // // import React from 'react'
// // // // import { useState } from 'react'

// // // // const App = () => {
// // // //   const [user,setUser]=useState({
// // // //     name:"Bhavya",
// // // //     age:21,
// // // //     City:"Ahmedabad"
// // // //   }) 
// // // //   return (
// // // //     <div>
// // // //       <p>User Profile</p>
// // // //       <p>{user.name}</p>
// // // //       <p>{user.age}</p>
// // // //       <p>{user.City}</p>
// // // //       <button onClick={()=>setUser(prev => ({
// // // //         ...prev,
// // // //         age: prev.age + 1
// // // //       }))}>Increase Age</button>
// // // //       <button onClick={() => setUser(prev=>({
// // // //         ...prev,
// // // //         city:"Mumbai"
// // // //       }))}>Change City</button>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App
// // // // import React from 'react'
// // // // import { useState } from 'react'

// // // // const App = () => {
// // // //   const [user,setUser] = useState([
// // // //     {
// // // //       name:"Bhavya",
// // // //       age:22
// // // //     },
// // // //     {
// // // //       name:"Krish",
// // // //       age:43
// // // //     }
// // // //   ])
// // // //   return (
// // // //     <div>
// // // //       <p>{user}</p>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App

// // // // import React from 'react'
// // // // import { useState } from 'react';

// // // // const App = () => {
// // // //   const [products, setProducts] = useState([
// // // //   {
// // // //     id: 1,
// // // //     name: "iPhone",
// // // //     price: 79999
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: "Samsung",
// // // //     price: 74999
// // // //   }
// // // // ]);
// // // //   return (
// // // //     <>
// // // //       <h2>Products</h2>
// // // //       <div>{products.map((item)=>{
// // // //         return <p>{item.name}- ₹{item.price}</p>
// // // //       })}</div>
// // // //       <button onClick={()=>setProducts(prev=>[...prev,{
// // // //         id: 3,
// // // //         name: "Pixel",
// // // //         price: 69999
// // // //       }])}>Add Pixel</button>
// // // //       <button onClick={()=>setProducts(prev=>prev.filter((item)=>item.id!==2))}>Remove Samsung</button>
// // // //       <button onClick={()=>setProducts(prev =>
// // // //           prev.map(item =>
// // // //             item.name === "iPhone"
// // // //               ? { ...item, price: item.price + 1000 }
// // // //               : item
// // // //           )
// // // //         )}>Increase Iphone Price</button>
// // // //     </>
// // // //   )
// // // // }

// // // // export default App
// // // // import React, { useState } from 'react'
// // // import { useState } from 'react';


// // // const App = () => {
// // //   function handleclick(){
// // //     console.log("Button Clicked")
// // //   }
// // //   const [count,setCount] = useState(0)
  

// // //   return (
// // //     <div>
// // //       <p>{count}</p>
// // //       <button onClick={()=>setCount(1)}>button1</button>
// // //       <button onClick={handleclick}>button</button>
// // //     </div>
// // //   )
// // // }

// // // export default App
// // // import React from 'react'

// // const App = () => {
// //   function handleButtonClick(event) {
// //   event.stopPropagation();

// //   console.log("Button");
// // }
// //   return (
// //       <div onClick={() => console.log("Parent")}>
// //   <button onClick={handleButtonClick}>
// //     Click
// //   </button>
// //     </div>
// //   )
// // }

// // export default App
// // import React from 'react'
// import React, { useState } from 'react';


// const App = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   function handlelogin(){
//     e.preventDefault();
//     console.log("Form Submitted")
//     console.log(username)
//     console.log(password)
//   }
//   return (
//     <div>
//       Username : <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
//       Password : <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//       <button onSubmit={handlelogin}>Login</button>
//     </div>
//   )
// }

// // export default App
// import { useState } from "react";

// const App = () => {
//   const [products, setProducts] = useState([
//     { id: 1, name: "iPhone", price: 79999 },
//     { id: 2, name: "Samsung", price: 74999 },
//     { id: 3, name: "Pixel", price: 69999 }
//   ]);

//   return (
//     <>
//       {products.map((item) => {
//         return (
//           <div key={item.id}>
//             {item.name} - ₹{item.price}

//             <button
//               onClick={() =>
//                 setProducts(prev =>
//                   prev.filter(product => product.id !== item.id)
//                 )
//               }
//             >
//               Delete
//             </button>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default App;
// // import React from 'react'
// import React, { useState } from 'react';


// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <div>
//       {isLoggedIn?
//       <><p>Welcome Bhavya</p>
//         <button onClick={()=> setIsLoggedIn(false)}>Logout</button></>:
//         <><p>Please Login</p>
//         <button onClick={()=>setIsLoggedIn(true)}>Login</button></>}
//     </div>
//   )
// }

// export default App
// import React from 'react'
import { useState } from 'react';


const App = () => {
  const [products, setProducts] = useState([
  {
    id: 1,
    name: "iPhone",
    price: 79999
  },
  {
    id: 2,
    name: "Samsung",
    price: 74999
  },
  {
    id: 3,
    name: "Pixel",
    price: 69999
  }
]);
  return (
    <div>
      {products.filter((product)=>product.price>=75000).map((item)=>{
        return<div key={item.is}>
          {item.name} - ₹{item.price}
        </div>
      })}
    </div>
  )
}

export default App
