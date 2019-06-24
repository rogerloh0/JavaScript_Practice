class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    // this.visibility = document.getElementById('w-visibility');
    // this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    // this.humidity.visibility = `Visibility: ${weather.visibility}`;
    // this.humidity.wind = `Wind: ${weather.wind.speed}`;
  }
}