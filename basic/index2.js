const hello = () => {
  //   console.log("-*-*".repeat(10));
  console.log("Say Hello 👋");
  console.log("-*-*".repeat(10));
};

// hello();

// async function getPhotos() {
//   try {
//     const response = await fetch(`https://api.unsplash.com/search/photos?query=minimal&per_page=10`);

//     if (!response.ok) {
//       throw new Error("Failed to fetch images");
//     }

//     // const data = await response.json();
//     console.log(response);
//   } catch (error) {
//     console.error("Error fetching photos:", error.message);
//   }
// }

// getPhotos();

// setTimeout(() => {
//   hello();
// }, 5000);

// setInterval(() => {
//     hello();
// }, 5000);

// const a = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a);
// const b = [...a];
// console.log(b);

// switch ("case name") {
//   case "electronics":
//     console.log("electronics");
//     break;

//   case "Footwear":
//     console.log("Footwear");
//     break;

//   default:
//     console.log("Category Is Not Disclosed");
// }

// const a = [1, 2, 3, 4, 5, 6, 7, 8];

// a.forEach((a) => {
//   console.log(a);
// });

// let obj = {
//   Name: "Kshitij Singh",
//   Class: "CSE - AIML",
//   Batch: "2025-26",
//   CurrentYear: "4th year",
//   CGPA: [8.38, 7.14, 7.58, 7.92, 8.34],

//   // print: allDetails,
//   // sayHello: hello,
// };

// for (let a in obj) {
//   console.log(a, ":", obj[a]);
// }

// const array = ["a", "b", "c"];

// for (const element of array) {
//   console.log(element+3);
// }

// console.log("Before");
// console.log("Before");
// console.log("Before");
// setTimeout(()=>{
//   console.log("Timeout")
// },0)

// console.log("After ");
// console.log("After ");
// console.log("After ");

const api = "http://localhost:5000/";

// const helloFunc = async () => {
//   try {
//     const res = await fetch(api);

//     if (!res.ok) {
//       throw new Error(`HTTP Error! Status: ${res.status}`);
//     }

//     const data = await res.json();

//     console.log("✅ Success");
//     console.log(data);
//   } catch (error) {
//     console.log("❌ Error:", error.message);
//   }
// };

// helloFunc();

// fetch(api)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`HTTP Error! Status: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log("✅ Success");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("❌ Error:", error.message);
//   });

const ans = new Promise((res, rej) => {
  let n = Math.floor(1 );

  if (n < 5) {
    return res();
  } else {
    return rej();
  }
});

ans
.then(() => console.log("✅ Success"))
.catch(() => console.log("❌ Error"));
