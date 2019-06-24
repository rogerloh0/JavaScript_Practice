// Init Weather Object
const weather = new Weather('Taipei', 'tw', 'metric');
// Init UI
const ui = new UI();
// Init storage
// const storage = new Storage

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, country, 'metric');

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