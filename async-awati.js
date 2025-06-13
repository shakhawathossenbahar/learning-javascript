const getData = (dataID) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("data", dataID);
         resolve("Success");
      }, 3000);
   });
};

// Normal way
async function getAllData() {
   await getData(1);
   await getData(2);
   await getData(3);
};

// IIFE
(async function () {
   await getData(1);
   await getData(2);
   await getData(3);
})();