let arr = ["Dhaka", "Chittagong", "Cumilla", "Barishal"];

arr.forEach(function printValue(val) {
   console.log(val);
});

arr.forEach((value, index) => {
   console.log(value, index);
});