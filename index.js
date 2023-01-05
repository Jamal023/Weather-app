const card = document.querySelector(".container");
const cityInput = document.querySelector("#cityInput");
const form = document.querySelector("form")

form.addEventListener('submit',  async (e) => {
  e.preventDefault();
  const cityResp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=188d29418805711738068caffbce18b2`
  );
  const data = await cityResp.json();
  const countryResp = await fetch(
    `https://restcountries.com/v2/alpha/${data.sys.country}`
  )
  const coutryData = await countryResp.json()
    console.log(data)
  card.innerHTML = `<div class="card">
    <div class="location">
      <span class="city-name">${data.name}</span>
      <span>-</span>
      <span class="country-name">${coutryData.name}</span>
    </div>
    <div class="timezone">
      <span class="date">${new Date(data.dt*1000).toLocaleTimeString()} -</span>
      <span class="date">${new Date(data.dt*1000).toLocaleDateString()}</span>
    </div>

    <div class="temperature">
      <span class="current-temp">${(data.main.temp - 272.15).toFixed(1)}°c</span>
    </div>

    <span>---------------------------------------</span>

    <div class="weather-condition">
      <span class="condition">${data.weather[0].main}</span>
      <span>-</span>
      <span class="detailed-c">${data.weather[0].description}</span>
    </div>

    <div class="other-temps">
      <span class="max-temp">H:${(data.main.temp_max - 272.15).toFixed(1)}°</span>
      <span>/</span>
      <span class="min-temp">L:${(data.main.temp_min - 272.15).toFixed(1)}°</span>
      <span>/</span>
      <span class="feel-temp">F:${(data.main.feels_like - 272.15).toFixed(1)}°</span>
    </div>

    <div class="humidty-pressure">
      <span class="humidty">Humidty: ${data.main.humidity}%</span>
      <span>~</span>
      <span class="pressure">Pressure: ${data.main.pressure}HG</span>
    </div>

    <div class="wind">
      <span class="wind-speed">Wind Speed: ${data.wind.speed}/s</span>
      <span>-</span>
      <span class="wind-direction">North</span>
    </div>
  </div>`;
  return data;
});



onSubmit()