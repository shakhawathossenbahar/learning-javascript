const students = {
   name: 'Shakhawat',
   age: 22,
   roll: 4,
   1: 465,
   2: 564,
};

console.log(students.name);  // dot notation
console.log(students[2]);  // bracket notation

console.log(Object.keys(students));  // all key to array

for (const key in students) {
   const values = students[key];
   console.log(values);
};