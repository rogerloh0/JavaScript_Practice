// Common JS Module Syntax
// const person = require('./mymodule1');

// ES2015 Module
//import {person} from './mymodule2';
// import * as mod from './mymodule2';
// import greeting from './mymodule2';

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData('https://jsonplaceholder.typicode.com/posts');
