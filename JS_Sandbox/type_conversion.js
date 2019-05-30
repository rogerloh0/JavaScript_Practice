let val;

// Number to string
val = String(5); // '5'
val = String(4+4); //'8'

//Bool to string
val = String(true);

//Date to string
val = String(new Date());
//Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

//String to number
val = Number('5');
val = Number(true); //1
val = Number(false); //0
val = Number(null); //0
val = Number('hello'); //NaN
val = Number([1,2,3]); //NaN

val = parseInt('100'); //100 as a integer
val = parseFloat('100.30'); //100.3 as a float

//Output
console.log(val);
console.log(typeof val);
// console.log(val.length); //;length is function from string
console.log(val.toFixed());

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum); //'56'
console.log(typeof sum);