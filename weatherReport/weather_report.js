function showweatherDetails(event) {

    
    const city = document.getElementById('city').value;
    const lat = document.getElementById('lat').value;
    const long = document.getElementById('long').value;
    const apiKey = 'a36fa77f2c52e055f09bffcf32ff343b'; // Replace 'YOUR_API_KEY' with your actual API key
    
    console.log(city)

    var apiUrl = ""

    if(city) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    }

    //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    
     fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        }).catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again. Hey!</p>`;
        });
    
    event.preventDefault();
}

 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );