// // import React, { useRef, useState } from "react";

// // const App = () => {
// //   const [timer, setTimer] = useState(0);
// //   const id = useRef(null);

// //   function handleStart() {
// //     if (id.current !== null) {
// //       return;
// //     }

// //     id.current = setInterval(() => {
// //       setTimer((prev) => prev + 1);
// //     }, 1000);
// //   }

// //   function handleStop() {
// //     clearInterval(id.current);
// //     id.current = null;
// //   }

// //   function reset() {
// //     clearInterval(id.current);
// //     id.current = null;
// //     setTimer(0);
// //   }

// //   return (
// //     <>
// //       <p>{timer}</p>

// //       <div>
// //         <button onClick={handleStart}>Start</button>
// //         <button onClick={handleStop}>Stop</button>
// //         <button onClick={reset}>Reset</button>
// //       </div>
// //     </>
// //   );
// // };

// // export default App;

// import React from "react";
// import Sum from "./Sum";

// const App = () => {
//   return (
//     <div>
//       <Sum number={100} />
//     </div>
//   );
// };

// // export default App;
// import React, { useMemo } from 'react'

// const App = () => {
//   const total = useMemo(()=>{
//     let num = 1232;
//     let total = 0;

//     for (let i = 2; i <= num; i++) {
//         let isPrime = true;

//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             total++;
//         }
//     }
//   return (
//     <div>
//       <p>num</p> 
//     </div>
//   )
// }

// export default App
