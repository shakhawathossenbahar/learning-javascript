let arr = [1, 3, 5, 7, 9];

arr.map((num) => {
   console.log(num);
});

let newArr = arr.map((num) => {
   return num*num;
});
console.log(newArr);