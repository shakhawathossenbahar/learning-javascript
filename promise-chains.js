const asyncFunc1 = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("Data1");
         resolve("Success");
      }, 4000);
   });
};

const asyncFunc2 = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("Data2");
         resolve("Success");
      }, 4000);
   });
};

console.log("Fetching data1...");
asyncFunc1().then(() => {
   console.log("Fetching data2...");
   asyncFunc2().then(() => { });
});



// console.log("Fetching data2...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//    console.log(res);
// });