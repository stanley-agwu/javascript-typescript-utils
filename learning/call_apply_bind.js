// call(), apply(), bind()

/* call()
Function.call(this: thisArg, ...argArray: any[])
Calls a method of an object, substituting another object for the current object.
@param thisArg — The object to be used as the current object.
@param argArray — A list of arguments to be passed to the method. Comma separated args.
*/

/* apply()
Function.apply(this: thisArg, argArray?: any)
Calls the function, substituting the specified object for the this value of the function,
and the specified array for the arguments of the function.
@param thisArg — The object to be used as the this object.
@param argArray — A set of arguments to be passed to the function. Array of args.
*/

/* bind()
Function.bind(this: thisArg, ...argArray: any[])
For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.
@param thisArg — An object to which the this keyword can refer inside the new function.
@param argArray — A list of arguments to be passed to the new function. Comma separated args.
*/

function displayName() {
  console.log('John Doe');
}

// displayName();
// displayName.call();
// displayName.apply();


// Function.call()
let participant1 = {
  name: 'John',
  batteryLife: 60,
  chargeBattery: function() {
    this.batteryLife = 100;
  }
}

// participant1.chargeBattery();
// console.log(participant1)

let participant2 = {
  name: 'Rose',
  batteryLife: 20,
}

// participant1.chargeBattery.call(participant2);
// console.log(participant1);
// console.log(participant2);

let participant3 = {
  name: 'Rose',
  batteryLife: 20,
  chargeBattery: function(a, b) {
    this.batteryLife = this.batteryLife + a + b;
  }
}

// participant3.chargeBattery.call(participant2, 15, 20);
// console.log(participant2);

// Function.apply()
// participant3.chargeBattery.apply(participant2, [35, 20]);
// console.log(participant2);

// Function.bind()
participant3.chargeBattery.bind(participant2, 27, 30);
console.log(participant2);
const bindedChargeBatteryFn = participant3.chargeBattery.bind(participant2, 27, 30);
bindedChargeBatteryFn();
// We can alternatively do this => participant3.chargeBattery.bind(participant2, 27, 30)();
console.log(participant2);
