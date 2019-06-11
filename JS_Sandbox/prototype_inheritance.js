// Person constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}.`;
}

const person1 = new Person('John', 'Doe')

// console.log(person1.greeting());

// Inherit the Person prototype methods
Customer.prototype.constructor = Customer

// Make customer prototype return Customer 11
Customer.prototype.constructor = Customer;

// Customer constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName)
  this.phone = phone;
  this.membership = membership;
}

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555', 'Standard');

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Custom Greeting
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}, welcome to the company.`
}

console.log(customer1);
console.log(customer1.greeting());
