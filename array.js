let arr = [34, 54, 25, 75, 34];
console.log(arr);
console.log(arr.length);
console.log(typeof (arr));
console.log(arr[0]);
arr[3] = 99;
console.log(arr);

for (let i = 0; i < arr.length; i++) {
   console.log(i, arr[i]);
}

// for of loop
for (let element of arr) {
   console.log(element);
}

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
   sum += marks[i];
}
console.log("Sum = " + sum);
let avg = sum / marks.length;
console.log(`The average of marks is ${avg}`);

let items = [250, 645, 300, 900, 50];
console.log(items);
for (let i = 0; i < items.length; i++) {
   let offer = arr[i] / 10;
   items[i] -= offer;
}
console.log(items);


// // Practice Question
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies);

// // for loop
// for (let i = 0; i < companies.length; i++) {
//    console.log(companies[i]);
// }

// // for of loop
// for (let company of companies) {
//    console.log(company);
// }


// Practice Question
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
companies.splice(2, 1, "Ola");
console.log(companies);