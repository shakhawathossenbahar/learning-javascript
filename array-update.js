// const arr = [1, 3, 5, 7, 8, 9];

const arr = [
   { id: 1, value: 10 },
   { id: 2, value: 20 },
   { id: 3, value: 30 },
   { id: 4, value: 40 },
   { id: 5, value: 50 },
]

const index = arr.findIndex(function (v) {
   return v.id == 4;
});
arr[index].value = 400;
console.log(arr);

// const obj = arr.find(function (v) {
//    return v.id == 4;
// })
// obj.value = 400;
// console.log(obj);