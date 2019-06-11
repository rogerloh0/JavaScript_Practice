// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this calculateAge = function(){
  //   const diff=  Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate Age
// Because this is same for everyone
Person.prototype.calculateAge = function(){
  const diff=  Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${lastname}`;
}

// Gets Married
Person.prototype.getsMarried = funciton(newLastName){
  this.lastname = newLastName;
}

const john = new Person('john', 'doe', '8-12-90');
const mary = new Person('mary','johnson','March 20 1978');

console.log(john.calculateAge());
console.log(john.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));