// Example - 01

// (() => {
//    let a = 2;
//    let b = 3;
//    const sum = () => {
//       return a + b;
//    };
//    console.log(sum());
//    console.dir(sum);

//    a = 5;
//    b = 6;
//    console.log(sum());
//    console.dir(sum);
// })();


// Example - 02

// function async() {
//    var a = 12;
//    setTimeout(() => {
//       console.log(a);
//    }, 2000);
// }

// async();


// Example - 03

// function apiFunction(url) {
//    fetch(url).then((res) => {
//       console.log(res);
//    });
// }

// apiFunction('https://jsonplaceholder.typicode.com/todos/1');


// Example - 04

for (var i = 0; i < 3; i++) {
   setTimeout(() => {
      console.log(i);
   }, i*1000);
}