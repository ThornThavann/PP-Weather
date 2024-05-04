// async function fet(){
//     const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Phnom%20Penh';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'cc8ce286ecmshab3e8ff4eefe669p158a3fjsn645fb88c8bec',
//             'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//                     document.querySelector('.container').innerHTML += `
//                     <h1>Name : ${result.location.name}</h1>
//                     <h1>Region : ${result.location.region}</h1>
//                     <h1>Date : ${result.location.lat}</h1>
//                     <h1>${result.location.lon}</h1>
//                     <h1>Country : ${result.location.country}</h1>
//                     <h1>${result.current.temp_c}</h1>
//                     <h1>${result.current.uv}</h1>
//                     <h1></h1>
    
    
                    
//                     `
         
//     } catch (error) {
//         console.error(error);
//     }
// }
// fet();
let thay = 'trithay@gmail.com';
const jsonString = '{"key": "'+thay+'", "number": 42}';
const jsonObject = JSON.parse(jsonString);


export default jsonObject;

