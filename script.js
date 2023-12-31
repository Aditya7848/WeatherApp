const btn = document.getElementById("clickbtn");

btn.addEventListener("click", () => {
  const inputCity = document.getElementById("input-town").value;

  // const apiKey = process.env.key;
  const key = '0f0bec9b6ebc668e09ac5ef286bbbf86' 
  const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=${key}&units=metric`;

  const fetchData = async () => {
    await fetch(url1)
      .then((res) => res.json())
      .then((data) => {
        
        document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "<sup>o</sup><span>c</span>";
        document.querySelector(".humidit").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";
        document.querySelector(".city").innerHTML = data.name;

        // handling weather Icons
        const weather = data.weather[0].main.toLowerCase();
        
        const getweatherimgNode = document.getElementById("weatherTell_img");
        if (weather === "rain") {
          getweatherimgNode.src =
            "https://openweathermap.org/img/wn/10d@2x.png";
          getweatherimgNode.alt = "rain_img";
        } else if (weather === "mist") {
          getweatherimgNode.src =
            "https://openweathermap.org/img/wn/50d@2x.png";
          getweatherimgNode.alt = "mist_img";
        } else if (weather === "clouds") {
          getweatherimgNode.src =
            "https://openweathermap.org/img/wn/02d@2x.png";
          getweatherimgNode.alt = "clouds_img";
        } else if (weather === "thunderstorm") {
          getweatherimgNode.src =
            "https://openweathermap.org/img/wn/11d@2x.png";
          getweatherimgNode.alt = "thunderstorm_img";
        } else if (weather === "drizzle") {
          getweatherimgNode.src =
            "https://openweathermap.org/img/wn/09d@2x.png";
          getweatherimgNode.alt = "drizzle_img";
        } else if (weather === "snow") {
          getweatherimgNode.src =
            "https://openweathermap.org/img/wn/13d@2x.png";
          getweatherimgNode.alt = "snow_img";
        } else {
          getweatherimgNode.src =
            "https://openweathermap.org/img/wn/01d@2x.png";
          getweatherimgNode.alt = "clear_img";
        }
      });
  };
  fetchData();
});
