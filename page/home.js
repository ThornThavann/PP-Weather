async function fet(){
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Phnom%20Penh';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cc8ce286ecmshab3e8ff4eefe669p158a3fjsn645fb88c8bec',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    document.querySelector('.container').innerHTML += `

    <div class="card" style="width: 35rem;margin: auto;">
    
    <div class="border-box" style="display: flex;">

                <div class="left" style="width: 30%; height: auto;margin-left: 40px;">
                    <div class="on">
                        <h1 style="font-size: 20px;margin-top: 20px;">Weather</h1>
                        <p>${result.current.last_updated}</p>
                    </div>
                    <img src="${result.current.condition.icon}" alt="">
                    <div class="down" style="display: flex;"> 
                        <div class="h1">
                            <h1 style="font-size: 100px;">${result.current.temp_c}</h1>
                        </div>
                        <div class="s" style="margin-top: 20px;  margin-left: 10px;">
                            <span class="wob_t" style="font-size: 30px;display:inline" aria-label="°Celsius" aria-disabled="true" role="button">°C</span>
                        </div>
                    </div>
                    <p style="color: darkgray; margin-top: -20px;font-size: 20px;">"${result.current.condition.text}"</p>
                </div>


                <div class="right" style="width: 70%;height: auto;margin-left: 80px;">
                    <h1 style="margin-top: 20px; font-size: 20px;">Conditions</h1>
                    <div class="all" style="display: flex;">
                        <div class="p">
                            <p>Feels Like</p>
                            <p>Humidity</p>
                            <p>Wind (Kph)</p>
                            <p>UV</p>
                        </div>
                        <div class="m" style="margin-left: 140px;">
                            <p>${result.current.feelslike_c}C</p>
                            <p>${result.current.humidity}%</p>
                            <p>${result.current.wind_kph}</p>
                            <p>${result.current.uv}</p>
                        </div>
                    </div>
                    <hr style="width: 90%;">
                    <div class="v" style="display: flex;">
                        <div class="t">
                            <p>Country</p>
                            <p>Zone</p>
                        </div>
                        <div class="y" style="margin-left: 80px;">
                            <p style="margin-left: 55px;">${result.location.country}</p>
                            <p>${result.location.tz_id}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div class="card-body">
        </div>
      </div>
    `
} catch (error) {
	console.error(error);
}
};
fet();