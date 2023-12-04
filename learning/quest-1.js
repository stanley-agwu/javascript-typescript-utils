// Number 1
const a = null;
const b = 123;
const c = '123';

// b = 456;
// b = c;
// 1.1 What will happen with this code?
// console.log({ b, c });
// b = 456; // TypeError: Assignment to constant variable
// b = c; // TypeError: Assignment to constant variable

// 1.2 If const was changed to let for all variables, what will happen?
// There will be no errors

// 1.3 What will be the difference if we were using Typescript?
// b = c; // Type 'string' is not assignable to type 'number'.

// Number 2
const n = '4' / 2;
console.log({ n });

// 2.1 What will be logged to the console?
// n: 2

// Number 3
let e  = { value: 1 };
let f = { value: 2 };
e = f;
f.value = 3;
console.log(e.value); // 3
console.log(f.value); // 3
// 3.1 What will be logged to the console?
// 3
// 3
// This is because Object and its values are reference types or stores reference to values

// Number 4
logValue(1)// logs "number: 1"
logValue("2")// logs "string: 2"
logValue({ a: 1})// logs "object: { "a": 1 }"
logValue([1, 2, 3, 4])// logs "array: [1, 2, 3, 4]"

// 4.1 implement logValue function
function logValue(value) {
  if (Array.isArray(value)) {
    console.log(`array: ${JSON.stringify(value)}`);
  } else {
    console.log(`${typeof value}: ${JSON.stringify(value)}`);
  }
}

// Number 5
function findNegative(array) {
  var result;
  for(let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      result = array[i];
    }
  }
  return result;
}

// 5.1 What is the purpose of this function? Please write it down in Plain English
// It searches for the last last negative value in the array

// 5.2 How would you improve this function? Consider code style, readability and performance
const findNegativeUpdated = (array) => {
  let result = null;
  for(let i = array.length - 1; i >= 0; i--) {
    if (array[i] < 0) {
      result = array[i];
      return result;
    }
  }
  return result;
}

console.log('findNegative => ', findNegative([1, 5, 3, 8, -2, 4, -1, 9, 0]));
console.log('findNegativeUpdated => ', findNegativeUpdated([1, 5, 3, 8, -2, 4, -1, 9, 0]));

// Number 6
console.log(joinArrays([1, 2], [3], [3, [5,[ 6]]])) // returns [1, 2, 3, 3, 5, 6]
console.log(joinArrays([1, 2], [3], [3, 5, 6])) // returns [1, 2, 3, 3, 5, 6]
console.log(joinArrays([1, 2], [3])) // returns [1, 2, 3]
console.log(joinArrays([1, 2], undefined, [3])) // returns [1, 2, 3]

// 6.1 implement joinArrays function
function joinArrays(...args) {
  // return [].concat(...args.filter((arg) => arg)); // ES6 syntax, depth (1)
  // return [].concat.apply([], args.filter((arg) => arg)); // Pre ES6, depth (1)
  return args.filter(Boolean).flat(Infinity); // highest depth(infinity)
}

// Number 7
console.log('-----------------------7------------------------');
console.log(arraysEquals([], [])); // true
console.log(arraysEquals([1, 2], [1, 2])); // true
console.log(arraysEquals([1, 2], [2, 1])); // false
console.log(arraysEquals([1, 2, 3], [1, 2])); // false
console.log(arraysEquals([1, 2, 3, 4], [1, 2, 3])); // false

// 7.1 implement arraysEquals function
function arraysEquals(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};

// Number 8
console.log('-----------------------8------------------------');
console.log(objectsEquals({}, {})); // true
console.log(objectsEquals({ a: 1 }, { a: 1 })); // true
console.log(objectsEquals({ a: 1 }, { a: 1, b: 2 })); // true
console.log(objectsEquals({ a: 1, b: 2 }, { a: 1 })); // false
console.log(objectsEquals({ a: 1, b: 2 }, { a: 1, b: 3 })); // false

// 8.1 implement objectsEquals function
function objectsEquals(a, b) {
  const resultA = Object.entries(a);
  const resultB = Object.entries(b);
  if (resultA?.length > resultB.length) {
    return false;
  }
  return resultA.every((entry, idx) => JSON.stringify(entry) === JSON.stringify(resultB[idx]));
}

// Number 9

// Number 10
// loadUsersInParallel([1, 2, 3]).then(r => console.log(r));

function loadUser(id) {
  return new Promise(resolve => {
    console.log(`started #${id}`);
    setTimeout(() => {
      console.log(`finished #${id}`);
      resolve(`data for user ${id}`)
    }, Math.random() * 1000)
  })
}
// 10.1 Implement loadUsersInParallel
// Promises in parallel (Concurrently -- More rightly (Javascript way))
const loadUsersInParallel = async (ids) => {
  const result = await Promise.all(ids.map(id => loadUser(id)));
  return result;
}

// 10.2 Implement loadUsersSequentially
const loadUsersSequentially = async (ids) => {
  const tasks = ids.map(id => loadUser(id));
  const results = [];
  for(const task of tasks) {
    results.push(await task);
  }
  return results;
}

loadUsersSequentially([1, 2, 3]).then((results) => console.log({ results }));

// Number 11
console.log('-----------------------11------------------------');
const logElement = (item, index) => console.log(`${item}: ${index}`);
const array = ['a', 'b', 'c'];
array.forEach(logElement);

const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// object.forEach(logElement); // should log to the console
// a: 1
// b: 2
// c: 3

// 11.1 How to add a new method to javascript standard types - Object

Object.prototype.forEach = function(func) {
  return Object.entries(this).map(([key, value]) => func(key, value));
}

object.forEach(logElement);
for(let key in object) {
  console.log({ key });
}

// Number 12
console.log('-----------------------12------------------------');
// [1, 2, 3, 4, 5].duplicate(); // should return [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
// 12.1 How to add a new method to javascript standard types - Array

Array.prototype.duplicate = function() {
  return this.concat(this);
}

console.log([1, 2, 3, 4, 5].duplicate());

// This is concept of currying in JS.
function add(a) {
  return function(b) {
    return a + b;
  };
}
add(2)(3); // 5

// This can be also achieved Using arrow function:
// let add = a => b => a + b;

// solution for add(1)(2)(5)(4)........(n)(); Using Recursion
function add(a) {
  return function(b){
    return b ? add(a + b) : a;
  }
}
// add(2)(3)(4)(5)(6)(); // 18

// Using ES6 Arrow function Syntax:
// let add = a => b => b ? add(a + b) : a;

function sum(x){
  return function(y){
    return function(z){
      return x + y + z;
    }
  }
}
console.log({sum: sum(2)(5)(7) }); // 14
