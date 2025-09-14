const numbers = [1, 2, 3, 4, 5, 6];

// const doubled = [];
// for (let i = 0; i < numbers.length; i++) {
//    doubled[i] = numbers[i] * 2;
// }
// console.log(doubled);


// const doubled = [];
// for (const number of numbers) {
//    const num = number * 2;
//    doubled.push(num);
// };
// console.log(doubled);


const doubled = numbers.map(number => number * 2);
console.log(doubled);


const friends = ['abel', 'babel', 'cabel', 'dabel']
const nameLength = friends.map(name => name.length);

console.log(nameLength);