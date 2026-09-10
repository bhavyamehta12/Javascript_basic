// const user = [
//     {id:1,name:"Bhavya",age:25},
//     {id:2,name:"Arjun",age:30},
//     {id:3,name:"Isha",age:28}
// ]
// const result = user.find(user => user.age > 25);
// console.log(result);
// const arr = [1,2,3,4,5,6,7,8,9];
// const result = arr.some(num => num>20)
// console.log(result);
// const arr = [1,2,3,4,5,6,7,8,9];
// const result = arr.every(num => num>0)
// console.log(result);
// const arr = [3,2,5,3,1,90,78,54]
// const result = arr.sort((a,b) =>b-a)
// console.log(result)
// const products = [
//     { name: "Laptop", price: 60000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Phone", price: 30000 }
// ];
// const result = products.sort((a,b)=>a.price-b.price)
// // console.log(result)
// arr.find(num=> num.id==2)
// arr.some(num=>num.stock<0)
// arr.every(num=>num.stock>0)
// arr.sort((a,tb)=>a.price-b.price)
// function greet(hi){
//     console.log("Hello"+)
// }
// function hi(){
//     console.log("Hi")
// }
// greet
// function add(a,b,callback){
//     const result =a+b;
//     callback(result)
// }
// add(10,20,function(result){
//     console.log(result)
// });
// function hello() {
//     console.log("Hello")

// }
// function hi(){
//     console.log("HI")
// }
// hello(hi())
// const prom = new Promise((resolve,reject)=>{
//     if(res) console.log("Success")
//     else reject("Error")
// })
// console.log(prom);
// const promise = new Promise((resolve,reject)=> {
//     let success = true;
//     if(success) resolve("Promise resolved successfully");
//     else reject("Promise rejected");
// })
// console.log(promise);
// const promise = new Promise((resolve,reject) => {
//     resolve("Promise resolved successfully");
// })
// promise.then((res)=>console.log(res)).catch((err)=>console.log(err))    
// Promise.resolve(10)
//     .then(value => {
//         return value * 2;
//     })
//     .then(value => {
//         console.log(value);
//     });
// Promise.resolve()
//     .then(() => {
//         console.log("A");
//         throw new Error("Failed");
//     })
//     .then(() => {
//         console.log("B");
//     })
//     .catch(error => {
//         console.log("C");
//     });
// const promise = new Promise(resolve=>resolve(100))
// console.log(promise)
// const userpromise = fetchuser();
// const orderspromise = fetchorders();
// const notificationspromise = fetchnotifications();

// Promise.all([userpromise, orderspromise, notificationspromise])
//        .then(([user, orders, notifications]) => {
//            console.log("User:", user);
//            console.log("Orders:", orders);
//            console.log("Notifications:", notifications);
//        }
//     ).catch(error => {
//         console.error("Error:", error);
//     })
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolved");
//     }, 2000)}
// )
// const p2 = new Promise((resolve,reject)=> {
//     setTimeout(() => {
//         resolve("Promise 2 rejected");
//     }, 1000)
// })
// Promise.all([p1,p2])
//     .then((results) => {
//         console.log(results)})
async function test(){
    return 10
}
console.log(test())