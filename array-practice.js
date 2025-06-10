let arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];
console.log(arr);


// let brr = arr.filter(ele => typeof (ele) === 'number');
// console.log(brr);


// let brr = [];  // new array to store only numbers
// for (let i = 0; i < arr.length; i++) {
//    if (typeof arr[i] === 'number') {
//       brr.push(arr[i]);
//    }
// }
// console.log(brr);


for (let i = 0; i < arr.length; i++) {
   if (typeof arr[i] !== 'number') {
      for (let j = i; j < arr.length - 1; j++) {
         arr[j] = arr[j + 1]; // Shift elements left
      }
      arr.length--; // Reduce array size manually
      i--; // Adjust index after shifting
   }
}
console.log(arr); // Modified array with only numbers