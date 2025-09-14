// default parameter
function addition(num1, num2 = 10) {

}


// template string
const numbers = [12, 43, 34, 64]
console.log(`I have ${numbers[3]} friends`);


// spread operator
const friends = ['abul', 'babul', 'cabul'];
const newFriends = [...friends, 'dabul', 'ebul'];
console.log(newFriends);


// destructuring
const { name, roll, marks } = { name: 'Shakhawat', roll: 4, marks: 96 };
console.log(name);