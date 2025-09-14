const numbers = [13, 54, 23, 65, 62, 123];

let sum = 0;
for (let number of numbers) {
   sum += number;
}
console.log(sum);

const total = numbers.reduce((acc, curr) => acc + curr);
console.log(total);