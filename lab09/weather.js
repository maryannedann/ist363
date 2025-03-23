document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=precipitation,temperature_2m,cloudcover&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=America/New_York";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weather = data.current;
            
            const temperature = weather.temperature_2m;
            const precipitation = weather.precipitation;
            const cloudCover = weather.cloudcover;

            document.getElementById("temperature").textContent = `${temperature}°F`;
            document.getElementById("precipitation").textContent = `${precipitation} inches`;

            const cloudEmoji = cloudCover > 50 ? "☁️" : "☀️"; 
            document.getElementById("cloud-emoji").textContent = cloudEmoji;
        })
});
