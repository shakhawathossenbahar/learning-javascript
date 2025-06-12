function getData(dataID, getNextData) {
   // 2 seconds of delay
   setTimeout(() => {
      console.log("data", dataID);
      if (getNextData) {
         getNextData();
      }
   }, 1000);
}

// Callback Hell
getData(1, () => {
   getData(2, () => {
      getData(3, () => {
         getData(4);
      });
   });
});