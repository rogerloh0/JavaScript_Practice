// Init storage
const storage = new Storage
//  Get stored location data
const weatherLocation = storage.getLocationData()
// Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.country, 'metric');
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Change Location
  weather.changeLocation(city, country, 'metric');

  // Set location in LS
  storage.setLocationData(city, country);

  // Get and display weahter
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
});


function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}