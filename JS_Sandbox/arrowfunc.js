const sayHello = function(){
  console.log('Hello');
}

const sayHello = () => {
  console.log('Hello');
}

// One line function does not need braces
const sayHello = () => console.log('Hello');

// return 'Hello'
const sayHello = () => 'Hello';

console.log(sayHello);

// return object literal
const sayHello = () => ({msg: "Hello"});

// Single param does not need parathesis
const sayHello = name => console.log(`Hello ${name}`);

// Multiple param need parathesis
const sayHello = (firstname, lastname) => console.log(`Hello ${firstname} ${lastname}`);

const users = ['Nathan', 'John', 'Roger'];

const nameLengths = users.map(function(name){
  return name.length;
});

// Shorter
const nameLengths =users.maps(name) =>{
  return name.length;
}

// Shortest
const nameLengths = users.map(name => name.length);