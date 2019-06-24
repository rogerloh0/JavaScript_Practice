class Weather{
  constructor(city, country, unit){
    this.apiKey = '943a270cfbaedd87fcc87f8591c37d65';
    this.city = city;
    this.country = country;
    this.unit = unit;
  }

  // Fetch Weather from API
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=${this.unit}`);

    const responseData = await response.json();
    
    return responseData;
  }
  
  // Change weather location
  changeLocation(city, country, unit){
    this.city = city;
    this.country = country;
    this.unit = unit;
  }
}