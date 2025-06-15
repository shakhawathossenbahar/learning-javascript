const students = {
   '123': {
      id: '123',
      name: 'MD Al-Amin',
      email: 'alamin@gmail.com',
   },
   '456': {
      id: '456',
      name: 'Akib Ahmed',
      email: 'akib@gmail.com',
   },
   '789': {
      id: '789',
      name: 'Elias Emon',
      email: 'elias@gmail.com',
   },
};

const std = {
   id: '246',
   name: 'Feroz Khan',
   email: 'feroz@gmail.com',
};


// addition
students[std.id] = std;


// update
const idToBeUpdated = '789';
const updatedData = {
   name: 'Md Azijul',
   email: 'azijul@gmail.com',
};

students[idToBeUpdated] = {
   ...students[idToBeUpdated],
   ...updatedData,
};


// delete
delete students[idToBeUpdated];


// Get anything

console.log(students['123']);


console.log(students);

for (let i in students) {
   console.log(students[i].name);
}

console.log(Object.values(students));


Object.values(students).forEach((item) => {
   console.log(item.email);
});

