// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); // Won't be added again, since it's already in the set

const set2 = new Set([1, true, 'string'])
console.log(set2);

console.log(set1);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100)); // True
console.log(set1.has(50+50)); // True
console.log(set1.has({name: 'John'})); // False, it's pointing to another part of memory, not a primitive type

// Delete from set
set1.delete(100);

console.log(set1);

// ITERATING THROUGH SETS

// For...of
for(let item of set1){
  console.log(item);
}
for(let item of set1.values()){
  console.log(item);
}
for(let item of set1.keys()){
  console.log(item);
}
// All are the same above

// ForEach Loop
set1.forEach((value) => {
  console.log(values);
});

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);