const arr = [45, 65, 77, 86, 24, 25, 76, 33];

function oddAvg(numbers) {
   let brr = numbers.filter((num) => {
      return num % 2 !== 0;
   });
   console.log(brr);

   let sum = 0;
   for (const num of brr) {
      sum += num;
   }
   
   let fractionAverage = sum / brr.length;
   let average = Math.ceil(fractionAverage);
   console.log(average);
}

oddAvg(arr);