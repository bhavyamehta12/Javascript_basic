let arr = [5,3,4,6,3,12,65,34,32];
arr.push(5);
arr.pop();
arr.unshift(6);
arr.shift();
console.log(arr.includes(3));
arr.find((value) => {
    if(value === 12){
        console.log("Value found");
    }
});
console.log(arr.indexOf(65));
let even = arr.filter((num) => {
    return num % 2 === 0;
})
console.log(even);
let mul =arr.map((num) => {
    return num * 2;
});
console.log(mul);
let sum = arr.reduce((acc, curr) => {
    return acc + curr;
});
console.log(sum);
let lar = arr.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
});
console.log(lar);
let small = arr.reduce((acc, curr) => {
    return acc < curr ? acc : curr;
});
console.log(small);
let at = arr.some((num) => {
    return num > 50;
});
console.log(at);
let all = arr.every((num) => {

    return num > 0;
}   );
console.log(all);
let sort = arr.sort((a,b) => {
    return a - b;
});
console.log(sort);

let students = [
    {id: 1, name: "John", age: 20,marks: 80,city: "New York"},
    {id: 2, name: "Jane", age: 22,marks: 90,city: "Los Angeles"},
    {id: 3, name: "Jim", age: 21,marks: 75,city: "Chicago"},
    {id: 4, name: "Jack", age: 23,marks: 85,city: "Houston"}
];
let student = students.find((student) => {
    return student.id== 2;
});
console.log(student);
let student1 = students.filter((student) => {
    return student.marks > 80;
});
console.log(student1);
let student2 = students.find((student) => {
    return student.city=="Chicago";
});
console.log(student2);
let name = students.map((student) => {
    return student.name;
}   );
console.log(name);
let marks = students.map((student) => {
    return student.marks;
});
console.log(marks);
let inc = students.map((student) => {
    return student.marks+2;
});
console.log(inc);
let highest = students.reduce((acc, curr) => {
    return acc.marks > curr.marks ? acc : curr;
});
console.log(highest);
let lowest = students.reduce((acc, curr) => {
    return acc.marks < curr.marks ? acc : curr;
});
console.log(lowest);
let avg = students.reduce((acc, curr) => {
    return acc + curr.marks;
}, 0) / students.length;
console.log(avg);

let cart = [
    {id: 1, name: "Product 1", price: 10, category: "Electronics", rating: 4.5, quantity: 2},
    {id: 2, name: "Product 2", price: 20, category: "Clothing", rating: 4.0, quantity: 1},
    {id: 3, name: "Product 3", price: 15, category: "Electronics", rating: 4.8, quantity: 3},
    {id: 4, name: "Product 4", price: 30, category: "Clothing", rating: 4.2, quantity: 2}
];
let product = cart.find((product) => {
    return product.id== 3;
});
console.log(product);
let product1 = cart.filter((product) => {
    return product.category=="Electronics";
});
console.log(product1);
let expensive = cart.reduce((acc, curr) => {
    return acc.price > curr.price ? acc : curr;
});
console.log(expensive);
let cheap = cart.reduce((acc, curr) => {
    return acc.price < curr.price ? acc : curr;
});
console.log(cheap);
let sumPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
}, 0);
console.log(sumPrice);
let avgRating = cart.reduce((acc, curr) => {
    return acc + curr.rating;
}, 0) / cart.length;
console.log(avgRating);
// Yes. Here is the **September 7, 2026 JavaScript interview-preparation Q&A you worked on today**, organized so you can revise it.

// I’m including the questions and your answers where I have them, followed by the **correct/interview-level answer**.

// ---

// # 1. `let`, `const`, `var` / JavaScript Fundamentals

// ### Q1. What is binding in variables?

// **Answer:**

// A **binding** is the association between a variable name and a value/reference.

// ```js
// let age = 21;
// ```

// Conceptually:

// ```text
// name: age
//    ↓
// binding
//    ↓
// value: 21
// ```

// The variable name `age` is bound to the value `21`.

// With objects:

// ```js
// const user = { name: "Bhavya" };
// ```

// `user` is bound to a reference to the object.

// ---

// ### Q2. Is `var` function scoped or globally scoped?

// **Answer:**

// `var` is **function scoped**, not block scoped.

// ```js
// function test() {
//     if (true) {
//         var x = 10;
//     }

//     console.log(x); // 10
// }
// ```

// But:

// ```js
// if (true) {
//     let y = 20;
// }

// console.log(y); // ReferenceError
// ```

// `let` and `const` are **block scoped**.

// Important:

// > `var` can be function-scoped or global-scoped depending on where it is declared, but its defining characteristic is that it is **not block scoped**.

// ---

// # 2. JavaScript Data Types / Values

// ### Q3. What are the major JavaScript data types?

// **Answer:**

// Primitive types:

// ```text
// string
// number
// bigint
// boolean
// undefined
// null
// symbol
// ```

// Non-primitive/reference-oriented values:

// ```text
// objects
// arrays
// functions
// ```

// Technically, arrays and functions are objects in JavaScript.

// ---

// ### Q4. What's the difference between `null` and `undefined`?

// Your answer was approximately:

// > `null` means no value and undefined means value is not initialized.

// That's a useful starting point, but the deeper distinction is:

// ### `undefined`

// Usually means:

// > A value has not been provided/assigned or a requested property/value doesn't exist.

// ```js
// let x;
// console.log(x); // undefined
// ```

// ### `null`

// Usually means:

// > The programmer intentionally represents the absence of an object/value.

// ```js
// let user = null;
// ```

// A common production example:

// ```js
// const user = await findUser(id);
// ```

// If the API/database lookup intentionally finds nothing, the application may represent that state with `null`.

// ---

// # 3. Operators / Truthy and Falsy

// You worked through several output questions involving:

// ```js
// &&
// ||
// !
// ??
// ```

// Remember:

// ### `||`

// Returns the first **truthy** operand.

// ```js
// 0 || "hello"
// ```

// Result:

// ```text
// "hello"
// ```

// Because `0` is falsy.

// ---

// ### `&&`

// Returns the first **falsy** operand.

// If everything is truthy, it returns the last operand.

// ```js
// true && "hello"
// ```

// Result:

// ```text
// "hello"
// ```

// ---

// ### `!`

// Converts to boolean and reverses it.

// ```js
// !true  // false
// !false // true
// ```

// ---

// # 4. Optional Chaining `?.`

// You specifically asked for `?.` in detail.

// ### Q5. What does optional chaining do?

// It allows you to safely access a property when an intermediate value might be `null` or `undefined`.

// Without it:

// ```js
// user.address.city
// ```

// If:

// ```js
// user.address === undefined
// ```

// you get an error.

// With:

// ```js
// user.address?.city
// ```

// the result becomes:

// ```js
// undefined
// ```

// instead of throwing because `address` is nullish.

// ---

// ### Q6. What happens with:

// ```js
// const user = {
//     address: {
//         city: "Ahmedabad"
//     }
// };

// console.log(user.address?.city);
// ```

// **Answer:**

// ```text
// Ahmedabad
// ```

// ---

// ### Q7. What if `address` is `null`?

// ```js
// const user = {
//     address: null
// };

// console.log(user.address?.city);
// ```

// **Answer:**

// ```text
// undefined
// ```

// ---

// ### Q8. What does optional chaining protect against?

// Primarily:

// ```text
// null
// undefined
// ```

// It does **not** mean:

// > "Ignore every possible error."

// For example, if a property exists but isn't callable:

// ```js
// const user = {
//     greet: 10
// };

// user.greet?.();
// ```

// You need to understand the particular optional-chaining operation being performed.

// ---

// # 5. `??` vs `||`

// You also worked on this today.

// ### Q9. What is the difference between `||` and `??`?

// `||` checks for **falsy** values.

// `??` checks specifically for:

// ```text
// null
// undefined
// ```

// Example:

// ```js
// 0 || 10
// ```

// Result:

// ```text
// 10
// ```

// But:

// ```js
// 0 ?? 10
// ```

// Result:

// ```text
// 0
// ```

// Because `0` isn't `null` or `undefined`.

// ---

// ### Q10. What about an empty string?

// ```js
// "" || "default"
// ```

// Result:

// ```text
// "default"
// ```

// But:

// ```js
// "" ?? "default"
// ```

// Result:

// ```text
// ""
// ```

// This is extremely useful in production when `0`, `false`, or `""` are valid values.

// ---

// # 6. Your Optional-Chaining Logic Questions

// You worked through questions where you reasoned about outputs such as:

// ```text
// 5 7
// 20
// null
// unknown 0 18 0
// ```

// The important concept you were practicing was:

// > Don't evaluate `||`, `&&`, and `??` purely from left to right as if they always return booleans.

// They return **operands**.

// For example:

// ```js
// const result = false || "hello";
// ```

// Result:

// ```text
// "hello"
// ```

// And:

// ```js
// const result = true && "hello";
// ```

// Result:

// ```text
// "hello"
// ```

// ---

// # 7. Array Methods

// You also studied:

// ```text
// map
// filter
// reduce
// find
// ```

// ### Q11. What does `map()` do?

// `map()` transforms every element and returns a **new array**.

// ```js
// const numbers = [1, 2, 3];

// const result = numbers.map(n => n * 2);
// ```

// Result:

// ```js
// [2, 4, 6]
// ```

// Think:

// ```text
// input → transform → new array
// ```

// ---

// ### Q12. What does `filter()` do?

// Keeps elements that satisfy a condition.

// ```js
// const numbers = [1, 2, 3, 4];

// const result = numbers.filter(n => n % 2 === 0);
// ```

// Result:

// ```js
// [2, 4]
// ```

// Think:

// ```text
// input → condition → selected elements
// ```

// ---

// ### Q13. What does `reduce()` do?

// Combines multiple elements into one accumulated result.

// ```js
// const numbers = [1, 2, 3, 4];

// const total = numbers.reduce(
//     (sum, n) => sum + n,
//     0
// );
// ```

// Result:

// ```text
// 10
// ```

// Think:

// ```text
// many values → accumulator → one result
// ```

// The result doesn't have to be a number. It could be:

// ```js
// {}
// []
// string
// Map
// object
// ```

// ---

// ### Q14. What does `find()` do?

// Returns the **first element** that satisfies the condition.

// ```js
// const users = [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" }
// ];

// const user = users.find(user => user.id === 2);
// ```

// Result:

// ```js
// { id: 2, name: "B" }
// ```

// If nothing is found:

// ```text
// undefined
// ```

// ---

// # 8. Loops — Today's Major Topic

// You answered these today.

// ---

// ### Q15. What is the output?

// ```js
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// ```

// Your answer:

// > `01234`

// **Correct.**

// More precisely, the console prints:

// ```text
// 0
// 1
// 2
// 3
// 4
// ```

// ---

// ### Q16. What are `break`, `continue`, and `return`?

// Your answer:

// > break means it will end loop and continue means it will skip that loop and return will end the function

// **Correct.**

// More precisely:

// ### `break`

// Terminates the nearest loop.

// ### `continue`

// Skips the current iteration and proceeds with the next iteration.

// ### `return`

// Terminates the entire function, so it also terminates a loop running inside that function.

// ---

// # 9. Infinite Loop

// ### Q17. Why is this an infinite loop?

// ```js
// let i = 0;

// while (i < 3) {
//     console.log(i);
// }
// ```

// Your answer:

// > because i isn't changing

// **Correct.**

// `i` remains:

// ```text
// 0
// ```

// Forever.

// So:

// ```text
// 0 < 3 → true
// 0 < 3 → true
// 0 < 3 → true
// ...
// ```

// Correct version:

// ```js
// let i = 0;

// while (i < 3) {
//     console.log(i);
//     i++;
// }
// ```

// ---

// # 10. `var` + Loop + Closure

// ### Q18. What is the output?

// ```js
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }
// ```

// Your answer:

// > `333`

// **Correct.**

// Why?

// `var` is function scoped.

// There is effectively one shared `i` binding.

// After the synchronous loop completes:

// ```text
// i = 3
// ```

// Then the callbacks execute.

// They all access that same binding:

// ```text
// callback 1 → i = 3
// callback 2 → i = 3
// callback 3 → i = 3
// ```

// Output:

// ```text
// 3
// 3
// 3
// ```

// This is a **closure + scope + asynchronous callback** question.

// ---

// # 11. `let` + Loop + Closure

// ### Q19. What happens here?

// ```js
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }
// ```

// Your answer:

// > `012`, let has special kind of binding with for loop

// **Correct.**

// Output:

// ```text
// 0
// 1
// 2
// ```

// The important concept is that `let` has block/lexical scoping and `for` loops have special per-iteration binding behavior.

// Conceptually:

// ```text
// iteration 1 → i = 0
// iteration 2 → i = 1
// iteration 3 → i = 2
// ```

// Each callback closes over the appropriate iteration's binding.

// ---

// # 12. Big-O — Loop

// ### Q20. What is the complexity?

// ```js
// for (let i = 0; i < n; i++) {
//     console.log(i);
// }
// ```

// Your answer:

// > `O(n)`

// **Correct.**

// The loop executes approximately `n` times.

// ---

// # 13. Nested Loop

// ### Q21. What is the complexity?

// ```js
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         console.log(i, j);
//     }
// }
// ```

// Your answer:

// > `O(n²)`

// **Correct.**

// Approximately:

// ```text
// n × n = n²
// ```

// Therefore:

// ```text
// O(n²)
// ```

// ---

// # 14. Important Big-O Mistake You Made

// ### Q22. What is the complexity?

// ```js
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < 100; j++) {
//         console.log(i, j);
//     }
// }
// ```

// Your answer:

// > `O(n^100)`

// ❌ **Incorrect.**

// Correct:

// ```text
// n × 100
// = 100n
// = O(n)
// ```

// Why?

// Because `100` is a **constant**.

// The inner loop does not grow with `n`.

// Compare:

// ```js
// for (let j = 0; j < n; j++)
// ```

// Here it grows with `n`.

// Therefore:

// ```text
// n × n = O(n²)
// ```

// But:

// ```js
// for (let j = 0; j < 100; j++)
// ```

// is always 100 iterations.

// Therefore:

// ```text
// n × 100 = O(n)
// ```

// ---

// # 15. `for...of`

// ### Q23. Why does this work?

// ```js
// const numbers = [10, 20, 30];

// for (const number of numbers) {
//     console.log(number);
// }
// ```

// Your answer:

// > because it is iterable

// 🟡 **Correct but incomplete for a deep interview.**

// The deeper answer:

// Arrays are **iterable**.

// They provide:

// ```js
// Symbol.iterator
// ```

// which can produce an **iterator**.

// The iterator has:

// ```js
// next()
// ```

// which produces results like:

// ```js
// { value: 10, done: false }
// { value: 20, done: false }
// { value: 30, done: false }
// { value: undefined, done: true }
// ```

// Conceptually:

// ```text
// for...of
//    ↓
// iterable
//    ↓
// Symbol.iterator
//    ↓
// iterator
//    ↓
// next()
//    ↓
// { value, done }
// ```

// ---

// # 16. `for...in` vs `for...of`

// ### Q24. What's the difference?

// Your answer:

// > for of only work when variable is iterable and in is for getting key only for objects and arrays

// 🟡 **Mostly correct.**

// Better interview answer:

// > "`for...in` iterates over enumerable property keys, whereas `for...of` iterates over values provided by an object's iterable protocol."

// Example:

// ```js
// const arr = ["A", "B", "C"];
// ```

// ### `for...in`

// ```js
// for (const x in arr) {
//     console.log(x);
// }
// ```

// Output:

// ```text
// 0
// 1
// 2
// ```

// ### `for...of`

// ```js
// for (const x of arr) {
//     console.log(x);
// }
// ```

// Output:

// ```text
// A
// B
// C
// ```

// ---

// # 17. Async Loop Question

// ### Q25. What's wrong with this?

// ```js
// users.forEach(async user => {
//     await saveUser(user);
// });

// console.log("Finished");
// ```

// Your answer:

// > idk

// ### Answer

// `forEach()` does not wait for the Promises returned by its callback.

// The callback is:

// ```js
// async user => {
//     await saveUser(user);
// }
// ```

// An `async` function returns a Promise.

// But `forEach()` doesn't collect and await those promises.

// So:

// ```js
// console.log("Finished");
// ```

// can execute before all users have been saved.

// For sequential async processing, use:

// ```js
// for (const user of users) {
//     await saveUser(user);
// }
// ```

// ---

// # 18. Sequential vs Concurrent Async Loops

// ### Q26. What's the difference?

// ```js
// for (const user of users) {
//     await saveUser(user);
// }
// ```

// vs:

// ```js
// await Promise.all(
//     users.map(user => saveUser(user))
// );
// ```

// Your answer:

// > idk

// ### Answer

// First:

// ```js
// for (const user of users) {
//     await saveUser(user);
// }
// ```

// is **sequential**.

// Conceptually:

// ```text
// User 1
//  ↓ wait
// User 2
//  ↓ wait
// User 3
//  ↓ wait
// ```

// Second:

// ```js
// await Promise.all(
//     users.map(user => saveUser(user))
// );
// ```

// initiates the operations concurrently and waits for all of them.

// Conceptually:

// ```text
// User 1 ──────┐
// User 2 ──────┤
// User 3 ──────┤ → wait for all
// User 4 ──────┘
// ```

// But don't blindly use `Promise.all()` for huge datasets because unlimited concurrency can overload:

// * database
// * APIs
// * memory
// * connection pools
// * CPU
// * external services

// Production systems often use **controlled concurrency/batching**.

// ---

// # 19. Five Million Records

// ### Q27. What problems can this create?

// ```js
// for (const record of records) {
//     await process(record);
// }
// ```

// for 5 million records?

// Your answer:

// > idk

// ### Answer

// Potential problems:

// ### 1. Very long execution time

// Processing sequentially means:

// ```text
// record 1
//  ↓
// wait
// record 2
//  ↓
// wait
// ...
// ```

// ### 2. Memory problems

// If you first do:

// ```js
// const records = await getAllRecords();
// ```

// you may load millions of records into memory.

// ### 3. Database load

// Millions of individual operations can be inefficient.

// ### 4. Failure handling

// What happens when record 3,782,451 fails?

// You need:

// * retry strategy
// * logging
// * failed-record tracking
// * resume capability
// * idempotency

// ### 5. Better architecture

// Usually something like:

// ```text
// Database
//  ↓
// Batch
//  ↓
// Controlled processing
//  ↓
// Success/failure handling
//  ↓
// Next batch
// ```

// ---

// # 20. Huge Synchronous Loop in Node.js

// ### Q28. Why is this dangerous?

// ```js
// while (someCondition) {
//     // huge CPU-heavy operation
// }
// ```

// Your answer:

// > idk

// ### Answer

// Node.js uses a JavaScript execution thread for your synchronous JavaScript.

// A CPU-heavy synchronous loop can occupy that execution continuously.

// Conceptually:

// ```text
// Request A
//    ↓
// huge synchronous loop
//    ↓
// ████████████████
// ████ CPU work ███
// ████████████████
//    ↓
// Request B can progress
// ```

// So a CPU-heavy loop can increase latency for other requests.

// This is why Node.js applications should avoid long-running CPU-heavy synchronous JavaScript on the main execution path.

// ---

// # 21. One Million Users + `Promise.all`

// ### Q29. Would you blindly do this?

// ```js
// await Promise.all(
//     users.map(saveUser)
// );
// ```

// Your answer:

// > idk

// ### Answer:

// **No.**

// For 100 users, this may be perfectly reasonable depending on the workload.

// For 100,000 or 1,000,000 users, blindly creating that many concurrent operations can overwhelm the system.

// Potential issues:

// ```text
// Memory
// Database connection pool
// API rate limits
// CPU
// Network
// External services
// Error handling
// ```

// Instead, production systems may use:

// ```text
// pagination
// batching
// queues
// workers
// controlled concurrency
// bulk database operations
// ```

// ---

// # 22. Production-Level Loop Architecture

// ### Q30. How would you process 1 million records?

// Your answer:

// > idk

// A strong production answer:

// ```text
// 1,000,000 records
//         ↓
// fetch manageable batch
//         ↓
// process with controlled concurrency
//         ↓
// handle success/failure
//         ↓
// persist progress
//         ↓
// fetch next batch
//         ↓
// repeat
// ```

// For example:

// ```text
// 1,000,000
//    ↓
// Batch 1: 1,000
//    ↓
// controlled concurrency
//    ↓
// Batch 2: 1,000
//    ↓
// controlled concurrency
//    ↓
// ...
// ```

// The exact batch size/concurrency depends on:

// * database
// * workload
// * latency
// * CPU
// * memory
// * connection pool
// * rate limits

// ---

// # Your Current Level

// Based on today's answers:

// ### Strong ✅

// You understand:

// * basic loops
// * `break`
// * `continue`
// * `return`
// * infinite loops
// * basic `var` vs `let`
// * basic closures in loops
// * basic Big-O
// * basic `for...in` / `for...of`

// ### Need more practice 🟡

// * iterable vs iterator
// * `Symbol.iterator`
// * async iteration
// * Promise concurrency
// * event loop interaction
// * production-scale processing
// * batching
// * controlled concurrency
// * Big-O analysis beyond obvious cases

// ### Most important correction

// Remember this:

// ```text
// Nested loops ≠ automatically O(n²)
// ```

// Instead ask:

// > **How many times does the innermost operation execute as `n` grows?**

// ---

// ## Today's overall revision map

// ```text
// JavaScript
// │
// ├── Variables
// │   ├── let
// │   ├── const
// │   ├── var
// │   └── bindings
// │
// ├── Data Types
// │   ├── primitives
// │   └── objects
// │
// ├── Operators
// │   ├── &&
// │   ├── ||
// │   ├── !
// │   └── ??
// │
// ├── Optional Chaining
// │   └── ?.
// │
// ├── Arrays
// │   ├── map
// │   ├── filter
// │   ├── reduce
// │   └── find
// │
// └── Loops
//     ├── for
//     ├── while
//     ├── break
//     ├── continue
//     ├── return
//     ├── nested loops
//     ├── Big-O
//     ├── var + closures
//     ├── let + closures
//     ├── for...in
//     ├── for...of
//     ├── iterable
//     ├── iterator
//     ├── Symbol.iterator
//     ├── async loops
//     ├── Promise.all
//     └── production-scale processing
// ```

// **The biggest thing to focus on next:** don't just memorize syntax. For every JavaScript feature, learn **what happens internally → why it behaves that way → where you'd use it in a real MERN/Node.js application → what can go wrong in production → how you'd explain it in an interview.**
