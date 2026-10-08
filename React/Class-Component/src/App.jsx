
// // import React from "react";

// // class App extends React.Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       count: 0
// //     };

// //     console.log("constructor");
// //   }

// //   render() {
// //     console.log("render");

// //     return (
// //       <h1>{this.state.count}</h1>
// //     );
// //   }
// //   componentDidMount() {
// //   console.log("componentDidMount");
  
// // }
// // }

// // export default App;
// import React from 'react'

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       count:0,
//       name:""
//     }
//   }
//   render(){
//     return(
//       <>
//         <h1>Count : {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//         Increment
//       </button>
//       <button onClick={() => this.setState({name:"Bhavya"})}>Change</button>

//       </>
//     );
    
//   }
//   componentDidUpdate(prevProps,prevState){
//    if(prevState.count!==this.state.count){
//     console.log("count changed")
//    }
//    if(prevState.name!==this.state.name){
//     console.log("name changed")
//    }
//   }
// }
// // export default App; 