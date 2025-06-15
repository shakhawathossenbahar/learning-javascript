const arr = [];
const arrToObj = {};
for (let i = 0; i < 10000000; i++) {
   const o = {
      id: i,
      value: i,
   };
   arr.push(o);
   arrToObj[i] = o;
}


// built in array find method vs object

console.time('find');
let id = 9999999;
const obj = arr.find((item) => item.id === id);
obj.value = 555;
console.timeEnd('find');

console.time('obj');
arrToObj[id].value = 999;
console.timeEnd('obj');