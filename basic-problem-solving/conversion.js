function inchToFeet(inch) {
   const feet = Math.floor(inch / 12);
   const inchi = inch % 12;
   const output = feet + " feet " + inchi + " inch";
   return output;
}

console.log(inchToFeet(78));