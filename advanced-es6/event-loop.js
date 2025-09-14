function one() {
   two();
   console.log(1);
}

function two() {
   three();
   console.log(2);
}

function three() {
   setTimeout(() => {
      console.log("timeout from 3")
   }, 0);
   four();
   console.log(3);
}

function four() {
   five();
   console.log(4);
}

function five() {
   setTimeout(() => {
      console.log("timeout from 5")
   }, 0);
   console.log(5);
}

one();