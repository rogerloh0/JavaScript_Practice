let re;
// Literal characters
re = /hello/;
re = /hello/i ;
// Metacharater Symbols
re = /^h/; // Must start with "h" (can use case insensetive)
re = /d$/; // Must end with "d"
re = /^Hello$/; // Must begin and end with
re = /^H.llo$/; // Match any ONE character
re = /^H*llo$/; // Match any character 0 or more times
re = /gre?a?y/; // Optional charater 
re = /gre?a?y\?/; // Escape charater 

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be a G or F
re = /[^GF]ray/i; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letters
re = /[a-z]ray/; // Match any lowercase letters
re = /[A-Za-z]ray/; // Match any letters
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur between min amount and max amount of times
re = /Hel{2,}o/i; // Must occur at least {m} times

// Paratheses () - Grouping
re = /([0-9]x){3}/; // Repeat [0-9]x {m} times

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more time
re = /\D/; // Match any Non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match Non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertion
re = /x(?=y)/; // Match x only if it's followed by y
re = /x(?!y)/; // Match x only if it's not followed by y

// String to match
const str = 'Hello World';
// Log result
const result = re.exec(str);
console.log(result);

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);
  } else{
    console.log(`${str} does NOT matchj ${re.source}`);
  }
}