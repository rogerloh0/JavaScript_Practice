let re;
re = /hello/;
re = /hello/i; // i = case insensitive
re = /hello/g; // g = global search

console.log(re); // /hello/
console.log(re.source); // hello

// exec() - Return result in an array or null
const result = re.exec('hello world');

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - Return true or false
const result = re.test('Hello'); //This will return False for the capital H, lowercase 
console.log(result);

// match() - Return result array or null
const  str = 'Hello There';
const result = str.match(re);
console.log(result)

// search() - Return index of the first match if not found returns -1
const str = 'Hello there';
const result = str.search(re);
console.log(result)

// replace() - Return new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'hi');
console.log(newStr);
