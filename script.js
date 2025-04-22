console.log("TEST!")


const apiURL = "https://api.weatherapi.com/v1/current.json?q=Cancun&key=4e5e576e864142e780a45600252403";
    fetch(apiURL)
        .then(response => {
            if(!response.ok) {
                throw new Error("Network is not responding");
            }
            return response.json();
        })
        .then(data => {
            var weatherInfo = data;
            weatherIcon.src = "https:" + weatherInfo.current.condition.icon;
            weatherTitle.innerHTML = `${weatherInfo.location.name}:`;
            temp.innerHTML = `Temp: ${weatherInfo.current.temp_c} °C`;
            wind.innerHTML = `Wind: ${weatherInfo.current.wind_kph} kph (${weatherInfo.current.wind_dir})`;
        })
        .catch(error => {
            console.error("Error:", error);
        })