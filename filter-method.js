let arr = [1, 7, 5, 3, 6, 2, 6, 56, 12, 65, 123, 64];
console.log(arr);


// filter out even elements


// style one
function odd(ele) {
   if (ele % 2 != 0) return true;
   else return false;
}
let brr = arr.filter(odd);
console.log(brr);


// style two
let crr = arr.filter(function odd(ele) {
   if (ele % 2 != 0) return true;
   else return false;
});
console.log(crr);


// style three
let drr = arr.filter((ele) => {
   if (ele % 2 != 0) return true;
   else return false;
});
console.log(drr);


// style four
let frr = arr.filter(ele => (ele < 7));
console.log(frr);