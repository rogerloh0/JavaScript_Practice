//Create some arrays
const numbers = [43,56,34,23,44,22,32,5];
const numbers2 = new Array(22,34,54,36,23);
const fruit = ['Apple', 'Banana','Orange','Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

//Get array length
val = numbers.length;
//Chekc if is array
val = Array.isArray(numbers);
//Get single value
val = numbers[2];
val = numbers[0];
//Insert into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(34);

//MUTATING ARRAYS
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from the front
numbers.shift();
// Splice values
numbers.splice(1,1);
// Reverse
numbers.reverse();

// CONCATENATE ARRAYS
val = numbers.concat(numbers2);

//Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the compare function
val = numbers.sort(function(x,y){
  return x-y;
})

// Reverse sort
val = numbers.sort(function(x,y){
  return y-x;
})

// Find
function under50(num){
  return num<50;
}

val = numbers.

console.log(numbers);
console.log(val);
