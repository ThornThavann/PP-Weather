// Function to navigate to the reaction page
function navigateToReactionPage() {
  window.location.href = "../page/reaction.html";
}


document.getElementById('shareReaction').addEventListener('click', navigateToReactionPage);





function logout(){
  localStorage.removeItem("loggedInEmail");
  window.location.href= "../page/login.html";
}
document.getElementById('btn-danger').addEventListener('click', logout);
function displayLoggedInUserEmail() {
  var loggedInEmail = localStorage.getItem("loggedInEmail");
  if (loggedInEmail) {
      document.getElementById("loggedInEmail").textContent = "Logged in as: " + loggedInEmail;
  }
}
displayLoggedInUserEmail();






async function fet(){
    const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=phnom%20penh&days=3';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f335ebf4a1msh8b6ec38f221032ep1af56djsn8bf8813232a6',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      document.getElementById('forecast').innerHTML +=`    <div class="box box1">
      <div class="left">
        <h3>Weather</h3>
        <h6>${result.current.last_updated}</h6>
        <img src="${result.current.condition.icon}" alt="" />
        <div class="num">
        <h1>${result.current.temp_c}</h1>
        <h5>°C</h5>
        </div>
        <p>"${result.current.condition.text}"</p>
      </div>

      <div class="rigth">
        <h3>Conditions</h3>
        <div class="box-right">
        <div class="title">
          <p>Feels Like</p>
          <p>Humidity</p>
          <p>Wind (Kph)</p>
          <p>UV</p>
          
        </div>
        <div class="number">
        <p>${result.current.feelslike_c}C</p>
        <p>${result.current.humidity}%</p>
        <p>${result.current.wind_kph}</p>
        <p>${result.current.uv}</p>
        </div>
        </div>
        <div class="border"></div>
        <div class="box-right">
        <div class="title">          
          <p>Country</p>
          <p>Zone</p>
        </div>
        <div class="number">
          <p>${result.location.country}</p>
          <p>${result.location.tz_id}</p>
        </div>
        </div>
    
      </div>
      </div>`;
     
    } catch (error) {
      console.error(error);
    }
    };
    fet();






    async function fat(){
        const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=phnom%20penh&days=3';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'f335ebf4a1msh8b6ec38f221032ep1af56djsn8bf8813232a6',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
        };
        
        try {
          const response = await fetch(url, options);
          const data = await response.json();
            let card = document.getElementById('forecas');
            
         for (let i= 1; i<=3;i++){
          card.innerHTML +=`    <div class="box box2">
          <div class="left">
            <h3>Weather</h3>
            <h6>${data.forecast.forecastday[i].date}</h6>
            <img src="${data.forecast.forecastday[i].day.condition.icon}" alt="" />
            <div class="num">
            <h1>${data.forecast.forecastday[i].day.avgtemp_c}</h1>
            <h5>°C</h5>
            </div>
            <p style=" width:400px;">"${data.forecast.forecastday[i].day.condition.text}"</p>
          </div>
          <div class="rigth">
            <h3>Conditions</h3>
            <div class="box-right">
            <div class="title">
              <p>Feels Like</p>
              <p>Humidity</p>
              <p>Wind (Kph)</p>
              <p>UV</p>
              
            </div>
            <div class="number">
              <p>${data.forecast.forecastday[i].day.avgtemp_c}</p>
              <p>${data.forecast.forecastday[i].day.avgtemp_f}</p>
              <p>${data.forecast.forecastday[i].day.maxwind_kph}</p>
              <p>${data.forecast.forecastday[i].day.uv}</p>
             
            </div>
            </div>
            <div class="border"></div>
            <div class="box-right">
            <div class="title">          
              <p>Country</p>
              <p>Zone</p>
            </div>
            <div class="number">
              <p>${data.location.country}</p>
              <p>${data.location.tz_id}</p>
            </div>
            </div>
        
          </div>
          </div>`;
         }
        
        
            
          console.log(data);
        } catch (error) {
          console.error(error);
        }
        }
        fat();



