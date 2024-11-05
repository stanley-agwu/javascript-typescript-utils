// Currying
// sum
function sum (a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

// console.log(sum(2)(4)(6));

// reusable operation (variable)
function evaluate(operation) {
  return function (a) {
    return function(b) {
      if (operation === 'sum') return a + b;
      if (operation === 'substract') return a - b;
      if (operation === 'multiply') return a * b;
      if (operation === 'divide') return a / b;
      return 'Invalid Operation';
    }
  }
}

const solve = evaluate('multiply');
// console.log(solve(2));
// console.log(solve(5)(5));
// console.log(solve(10)(5));

// Infinite currying (Recursive currying)
function addR(a) {
  return function(b) {
    if (b) return addR(a + b);
    return a;
  }
}

console.log(addR(1)(2)(3)(4)(5)())
console.log(addR(5)())

// Partial Implementation
function sumP(a) {
  return function(b, c) {
    return a + b + c
  }
}

// const sumElements = sumP(2);
// console.log(sumElements(5, 10));
// console.log(sumElements(5, 5));
// or Alternatively
// console.log(sumP(5)(5, 5));

// Curry Implementation
// Convert normal function to curry function
function curry(func) {
  return function curryFunc (...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return function(...next) {
      return curryFunc(...args, ...next);
    }
  }
}
const sumI = (a, b, c) => a + b + c;

const totalSum = curry(sumI);
console.log(totalSum(2)(5)(1));

// Compose functions
function compose (funcArr) {
  return function(x) {
    return funcArr.reduceRight((acc, f) => f(acc), x);
  }
}

const addOne = a => a + 1;
const timesTwo = a => a * 2;

console.log(compose([addOne, timesTwo])(1))
console.log(compose([addOne, timesTwo])(2))
let A = ['E', 'G'];
let B = A.toReversed();
console.log(A, B);
