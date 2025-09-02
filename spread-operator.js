const arr = [34, 65, 75, 35];
console.log(arr);
console.log(...arr);

const first = [1, 2, 3, 4, 5, { x: 10 }];
const second = [...first];  // 
second[5].x = 99;
console.log(first);
console.log(second);


let arr3 = [1, 2, { y: 5 }];
let deep = JSON.parse(JSON.stringify(arr3));
console.log(arr3);
console.log(deep);

deep[2].y = 120;
console.log(arr3);
console.log(deep);