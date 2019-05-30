const firstName = 'William';
const lastName = 'Johnson';
const age = 36
const str = 'hello there, my name is Bratt'

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += "Traversy";

val = 'hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait.";

//Length
val = firstName.length;

//Concat
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

//IndexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt()
val = firstName.charAt(2);

// get last char
val = firstName.charAt(firstName.length - 1)

//substring
val = firstName.substr(0,4);

//slice
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split
val = str.split(' ');

//replace
val = str.replace('Bratt', 'Jack');

//includes()
val = str.includes('hello'); //true
val = str.includes('foo'); //false

console.log(val);