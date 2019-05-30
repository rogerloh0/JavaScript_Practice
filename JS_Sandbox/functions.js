// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
  // //ES5
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}

  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('John', 'Doe'));

// FUNCTION EXPRESSIONS
const square = function(x = 3){
  return x*x;
};

console.log(square(9));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log(('IIFE Ran..'));
// })();

// (function(name){
//   console.log(('Hello '+ name));
// })('Brad');

// PROPERTY METHODS
const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo....');
}

todo.add();
todo.edit(22);
todo.delete();