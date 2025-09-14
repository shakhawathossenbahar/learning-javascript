class Player {
   constructor(name, age) {
      this.name = name;
      this.age = age;
      this.location = 'Bangladesh';
      console.log('Calling the constructor method', name)
   }
   goal() {
      console.log('Scored a goal')
   }
}

const player1 = new Player('Shakhawat', 23);
const player2 = new Player('Sakib', 20);

console.log(player1);
console.log(player2);