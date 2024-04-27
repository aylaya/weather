document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const country = document.getElementById("country-input").value;
    
    const weatherApiKey = "54b1407dcc4d3ca0d88eefdeca4dd8a4";
    const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + country + "&appid=" + weatherApiKey;
    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weather");
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const iconUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            weatherInfo.innerHTML = `
                <h3>Weather in ${country}</h3>
                <p>Temperature: ${temperature} K</p>
                <p>Description: ${description}</p>
                <img src="${iconUrl}" alt="Weather Icon">
            `;
        })
        .catch(error => {
            const weatherInfo = document.getElementById("weather");
            weatherInfo.innerHTML = `<p>Error fetching weather data for ${country}</p>`;
            console.log( error);
        });
})