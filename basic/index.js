// =====================================================================
// JAVASCRIPT FUNDAMENTALS – DETAILED EXPLANATION (INTERVIEW + EXAM READY)
// Author: Kshitij Singh
// =====================================================================


// =====================================================================
// 1. VAR KEYWORD (VARIABLE DECLARATION)
// =====================================================================

// Definition (Beginner-friendly):
// `var` is a keyword used to declare variables in JavaScript.

// Core Theory:
// - `var` is function-scoped (not block-scoped)
// - It allows re-declaration in the same scope
// - It is hoisted (moved to top during execution phase)

// Syntax:
// var variableName = value;

// Real-world analogy:
// Think of `var` like a shared whiteboard in an office.
// Anyone can erase and rewrite the same name again and again.

// Common mistake:
// Assuming `var` behaves like `let`

// Edge case:
// Re-declaring `var` does NOT throw error (but overwrites value)

// Interview-ready answer:
// `var` is function-scoped, hoisted, and allows re-declaration.

var a = 12;
var a = 10; // re-declaration allowed
console.log("Value of a:", a); // Output: 10


// =====================================================================
// 2. DOM SELECTION & EVENT HANDLING
// =====================================================================

// Definition:
// DOM (Document Object Model) allows JavaScript to interact with HTML.

// Core Theory:
// - `querySelector()` selects elements using CSS selectors
// - `addEventListener()` attaches an event to an element

// Syntax:
// document.querySelector(selector)
// element.addEventListener(event, callback)

// Real-world analogy:
// Button = switch
// Event listener = electrician waiting for the switch press

// Common mistakes:
// - Using wrong selector (# for id, . for class)
// - Script runs before HTML loads → element becomes null

// Interview-ready answer:
// JavaScript handles user interaction using event listeners.

const btn = document.querySelector("#explore");

btn.addEventListener("click", () => {
  console.log("Hello");
});

document.querySelector("#contact").addEventListener("click", () => {
  console.log("Hello !!");
});


// =====================================================================
// 3. HOISTING WITH VAR
// =====================================================================

// Definition:
// Hoisting moves declarations to the top of the scope.

// Core Theory:
// - `var` is hoisted and initialized with `undefined`
// - `let` and `const` are hoisted but NOT initialized

// Step-by-step execution:
// 1. JS scans code
// 2. `var b` moves to top
// 3. value assigned later

// Equivalent internally:
// var b;
// console.log(b);
// b = 1289;

// Interview-ready answer:
// `var` variables are hoisted and initialized as undefined.

console.log(b); // undefined
var b = 1289;
console.log(b); // 1289


// =====================================================================
// 4. IF-ELSE CONDITIONAL STATEMENT
// =====================================================================

// Definition:
// Executes different code blocks based on a condition.

// Core Theory:
// - Condition must return true or false
// - Only one block executes

// Syntax:
// if (condition) { } else { }

// Real-world analogy:
// Traffic light: green → go, red → stop

// Common mistake:
// Using assignment (=) instead of comparison (== or ===)

let age = 18;

if (age > 19) {
  console.log("You are allowed to vote ✅");
} else {
  console.log("You are not allowed to vote ❌");
}


// =====================================================================
// 5. STRICT EQUALITY OPERATOR (===)
// =====================================================================

// Definition:
// `===` compares value AND datatype.

// Core Theory:
// - No type coercion
// - Safer than `==`

// Syntax:
// value1 === value2

// Variant comparison:
// "18" == 18   → true  (type coercion)
// "18" === 18  → false (strict)

// Interview-ready answer:
// `===` checks both value and datatype.

console.log("18" === "18"); // true


// =====================================================================
// 6. FOR LOOP
// =====================================================================

// Definition:
// Loop used when number of iterations is known.

// Syntax:
// for (init; condition; increment) { }

// Execution flow:
// Initialization → Condition → Body → Increment

// Time Complexity:
// O(n)

// Use case:
// Fixed number of repetitions

// Interview-ready answer:
// `for` loop is used when iteration count is known.

for (let i = 0; i <= 5; i++) {
  console.log("1️⃣ For Loop Working", i);
}

console.log(" ");


// =====================================================================
// 7. DO-WHILE LOOP
// =====================================================================

// Definition:
// Loop that executes at least once.

// Core Theory:
// - Condition checked AFTER execution

// Syntax:
// do { } while (condition)

// Edge case:
// Runs even if condition is false initially

// Interview-ready answer:
// `do-while` loop executes minimum one time.

let i = 1;
do {
  console.log("② Do While Loop Working", i);
  i++;
} while (i <= 5);

console.log(" ");


// =====================================================================
// 8. WHILE LOOP
// =====================================================================

// Definition:
// Loop that runs while condition is true.

// Difference from do-while:
// - Condition checked BEFORE execution

// Interview-ready answer:
// `while` loop checks condition first.

i = 1;
while (i <= 5) {
  console.log("❸ While Loop Working", i);
  i++;
}


// =====================================================================
// 9. FUNCTION DECLARATION
// =====================================================================

// Definition:
// Function is a reusable block of code.

// Core Theory:
// - Function declarations are hoisted
// - Helps avoid repetition

// Syntax:
// function functionName(params) { }

// Use case:
// Code reuse, modularity

function allDetails(name, cls) {
  console.log("-".repeat(60));
  console.log("Name:", name);
  console.log("Class:", cls);
}


// =====================================================================
// 10. ARROW FUNCTION
// =====================================================================

// Definition:
// Arrow function is a shorter way to write functions.

// Core Theory:
// - Does NOT have its own `this`
// - Uses lexical `this`

// Syntax:
// const fn = () => { }

// Interview-ready answer:
// Arrow functions have lexical `this`.

const hello = () => {
  console.log("-".repeat(60));
  console.log("Hello Everyone");
};


// =====================================================================
// 11. OBJECTS & FUNCTION REFERENCES
// =====================================================================

// Definition:
// Objects store data as key–value pairs.

// Core Theory:
// - Functions should be stored as references
// - Do NOT call functions during object creation

// Common mistake:
// print: allDetails() ❌
// print: allDetails  ✅

// Interview-ready answer:
// Objects store function references, not function calls.

let obj = {
  name: "Kshitij Singh",
  class: "CSE - AIML",
  batch: "2025-26",
  currentYear: "4th year",
  CGPA: [8.38, 7.14, 7.58, 7.92, 8.34],

  print: allDetails,
  sayHello: hello,
};

console.log(obj);


// =====================================================================
// 12. CALLING OBJECT FUNCTIONS
// =====================================================================

// Definition:
// Functions inside objects are called using dot notation.

// Syntax:
// object.method(arguments)

// Practical use:
// Encapsulation of data + behavior

obj.print(obj.name, obj.class);
obj.sayHello();


// =====================================================================
// HINGLISH QUICK REVISION (LAST 2 MIN)
// =====================================================================

// `var` purana keyword hai, redeclare ho sakta hai
// Hoisting me `var` undefined hota hai
// `querySelector` HTML element select karta hai
// `addEventListener` user ke events handle karta hai
// `===` value aur type dono check karta hai
// `for` loop fixed count ke liye hota hai
// `do-while` kam se kam ek baar chalta hai
// Functions code reuse ke liye hote hain
// Object ke andar function CALL nahi, reference store hota hai

