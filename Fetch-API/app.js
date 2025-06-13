const URL = "https://catfact.ninja/breeds?limit=1";
const breedPara = document.querySelector("#breed");
const btn = document.querySelector("#btn");


const getBreed = async () => {
   console.log("Getting data...");
   let response = await fetch(URL);
   let data = await response.json();
   console.log(data);
};


btn.addEventListener("click", getBreed);