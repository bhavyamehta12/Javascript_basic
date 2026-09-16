// const users = [
//   {
//     id: 1,
//     name: "Bhavya",
//     age: 21,
//     active: true,
//     address: {
//       city: "Ahmedabad"
//     },
//     skills: ["JS", "React"],
//     salary: 60000
//   },
//   {
//     id: 2,
//     name: "Rahul",
//     age: 17,
//     active: false,
//     address: null,
//     skills: ["HTML", "CSS"],
//     salary: 30000
//   },
//   {
//     id: 3,
//     name: "Priya",
//     age: 25,
//     active: true,
//     address: {
//       city: "Mumbai"
//     },
//     skills: ["JS", "Node"],
//     salary: 80000
//   }
// ];
// const result= users.filter(user=>user.active===true&&user.age>18).map((user)=>{
//     return {
//         name:user.name,
//         city:user.address?.city ?? "unknown",
//         skillsCount:user.skills.length,
//         isHighEarner:user.salary>=70000? true:false
//     }
// })
// const total = users.reduce((acc,user)=> acc+user.salary,0)
// console.log(result)
// console.log(total)
// async function hello(){
//     thro w new Error("Something went wrong")
// }
// hello().catch((err)=>console.log(err))
// async function getData(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(res)
// }
// // getData()
// const user = await createUser();

// const account = await createBankAccount(user.id);

// const email = await sendWelcomeEmail(user.email);