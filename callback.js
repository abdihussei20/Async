
async function getRandomNumber () {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      resolve (Math.random());
    }, 500);
  });   
 }

 async function display () {
  let result = await getRandomNumber();
    console.log(result);
 }

 display();
 
async function city_location (city) {
    let response = await fetch(`https://geocode.xyz/${city}?json=1`);
    let data =  await response.json()
    console.log(data.longt, data.latt);
 }
 city_location("boston");
 


 
 
   
   



   
  
 


  