let arr = [1, 2, 3, 4];
const sum = arr.reduce((previous, current) => {
   return previous + current;
});
console.log(sum);


let brr = [2, 6, 7, 3, 24, 15];
const largest = brr.reduce((previous, current) => {
   return previous > current ? previous : current;  // best practice
   // if(previous>current) return previous;
   // else return current;
});
console.log(largest);