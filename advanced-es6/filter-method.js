const numbers = [23, 54, 34, 64, 24, 80];

console.log(numbers.filter(x => x > 30));
console.log(numbers.find(x => x > 60));

const students = [
   { id: 1, name: 'abul', age: 12, roll: 34 },
   { id: 2, name: 'abul', age: 22, roll: 44 },
   { id: 3, name: 'abul', age: 32, roll: 54 },
   { id: 4, name: 'abul', age: 42, roll: 64 },
   { id: 5, name: 'abul', age: 52, roll: 74 }
];

const names = students.map(student => student.name);
console.log(names);

const brilliantStudent = students.filter(student => student.roll < 50)
console.log(brilliantStudent);