// Counting Vowels
// Create a function using the 'function' keyword that takes a string as an argument & returns the number of vowels in the string

function countVowels(str) {
   let count = 0;
   for (const char of str.toLowerCase()) {
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
         count++;
      }
   }
   return count;
}

console.log(countVowels("Apna College"));


// Using arrow function

const countVow = (str) => {
   let count = 0;
   for (const char of str.toLowerCase()) {
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
         count++;
      }
   }
   return count;
}

console.log(countVow("Apna College"));