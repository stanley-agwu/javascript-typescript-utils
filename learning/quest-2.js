// 1 What will the following code output?
for (var i = 0; i < 3; i++) {
  // setTimeout(function() { alert(i); }, 1000 + i);
  // setTimeout(function() { console.log(i); }, 1000 + i);
}

// It will output 3, 3, 3
//  This is because of an issue with JavaScript closures.
// 1.1 How to solve this problem?

// solution 1 - Using IIFE
console.log('---------------IIFE--------------');
for (var i = 0; i < 3; i++) {
  setTimeout(function(i_local) {
    return function () {
      // console.log(i_local);
    }
  }(i), 1000 + i);
}

// solution 2 - using block scope variable let
for (let i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 1000 + i);
}

// 2 Write a function that would allow you to do this.
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
console.log(addSix(10));
console.log(addSix(21));

function createBase(baseNumber) {
  return function (num) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + num;
  }
}

// 3 How would you use a closure to create a private counter?
// Answer
// You can create a function within an outer function (a closure) that allows
// you to update a private variable but the variable wouldn't be accessible
// from outside the function without the use of a helper function.

function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; },
    getCounter: function() { return _counter },
  }
}

// error if we try to access the private variable like below
// c._counter => undefined

// usage of our counter function
var c = counter();
c.add(5); 
c.add(9); 

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14
console.log(c.retrieve());
console.log(c.getCounter());