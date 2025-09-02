const names = ['Rahim', 'Karim', 'Lamim', 'Rahim', 'Sabit'];
const numbers = [2, 5, 5, 4, 6, 34, 65, 23, 34, 65];

function noDuplicate1(arr) {
   let brr = [];
   for (let item of arr) {
      if (brr.includes(item) === false) {
         brr.push(item);
      }
   }
   return brr;
}

function noDuplicate2(arr) {
   let brr = [];
   for (let item of arr) {
      if (brr.includes(item) === false) {
         brr.push(item);
      }
   }
   return brr;
}

const uniqueArray1 = noDuplicate1(names);
console.log(uniqueArray1);

const uniqueArray2 = noDuplicate2(numbers);
console.log(uniqueArray2);