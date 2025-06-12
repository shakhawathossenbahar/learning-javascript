// console.log("One");
// console.log("Two");

// setTimeout(() => {
//    console.log("Shakhawat")
// }, 3000);

// console.log("Three");
// console.log("Four");





let x = 1000;
const str = "Hello Shakhawat";
for (let i = 0; i < str.length; i++) {
   setTimeout(() => {
      process.stdout.write(str[i]);
   }, x);
   x += 1000;
}


// const str = "Hello Shakhawat";
// const delay = 1000;
// str.split('').forEach((char, index) => {
//    setTimeout(() => {
//       process.stdout.write(char);
//    }, delay * (index + 1));
// });





// setTimeout(() => {
//    process.stdout.write("H")
// }, 2000);

// setTimeout(() => {
//    process.stdout.write("e")
// }, 3000);

// setTimeout(() => {
//    process.stdout.write("l")
// }, 4000);

// setTimeout(() => {
//    process.stdout.write("l")
// }, 5000);

// setTimeout(() => {
//    process.stdout.write("o")
// }, 6000);