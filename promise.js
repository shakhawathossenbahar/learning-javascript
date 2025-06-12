const getPromise = () => {
   return new Promise((resolve, reject) => {
      console.log("I am a promise");
      resolve("Success");
   });
};

let promise = getPromise();

promise.then((res) => {
   console.log("Promise fulfilled", res);
});

promise.catch((err) => {
   console.log("Rejected", err);
});














// let promise = new Promise((resolve, reject) => {
//    console.log("I am a promise");
//    resolve(123);
// });



// function getData(dataID, getNextData) {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          console.log("data", dataID);
//          resolve("Success");
//          if (getNextData) {
//             getNextData();
//          }
//       }, 10000);
//    });
// }