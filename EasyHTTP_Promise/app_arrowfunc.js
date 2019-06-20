document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExt);


// Get Local Text Data
function getText(){
  fetch('text.txt')
  .then(res => res.text())
  .then(data => {
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err));
}

// Get Local JSON Data
function getJSON(){
  fetch('post.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}

// Get Local JSON Data
function getJSON(){
  fetch('post.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}

// Get from external API
function getExt(){
  fetch('https://api.github.com/users')
  .then(es => res.json())
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(function(user){
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}