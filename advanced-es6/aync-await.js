async function loadData() {
   console.log("one");
   console.log("two");

   // fetch('https://jsonplaceholder.typicode.com/users')
   //    .then(res => res.json())
   //    .then(data => console.log('data found'));

   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await res.json();
   console.log(data[0].name);

   console.log("four");
   console.log("five");
}

loadData();




const loadData2 = async () => {
   console.log('one');
   console.log('two');
   try {
      const res = await fetch('https://jsonplaceholder.typicode.com/uses');
      const data = await res.json();
      console.log(data[0].id);
   }
   catch {
      console.log("data not found");
   }
   console.log('three');
   console.log('four');
}

loadData2();