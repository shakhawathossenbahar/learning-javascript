class Dog {
   constructor(name, breed) {
      this.name = name;
      this.breed = breed;
   }

   eat() {
      console.log(`${this.name} is eating`);
   }

   bark() {
      console.log(`${this.name} is barking`);
   }
}