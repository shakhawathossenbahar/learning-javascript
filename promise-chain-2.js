const getData = (dataID) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("data", dataID);
         resolve("Success");
      }, 3000);
   });
};

// Promise Chain

// let p1 = getData(1);
// p1.then((res) => {
//    console.log(res);
// });

// getData(1).then((res) => {
//    console.log(res);
//    getData(2).then((res) =>{
//       console.log(res);
//    });
// });

// best chaining practice
getData(1).then((res) => {
   return getData(2);
}).then((res) => {
   return getData(3);
}).then((res) => {
   console.log(res);
});