const A = '8'/ 2; // { A: 4, type: 'number' }
const B = '8' * 3; // { B: 24, type: 'number' }
const C = '8' + 5; // { C: '85', type: 'string' }
const D = '8' - 3; // { D: 5, type: 'number' }
const E = 5 - '2'; // { E: 3, type: 'number' }
const F = 7 * '3'; // { F: 21, type: 'number' }
const G = 3 + '4'; // { G: '34', type: 'string' }
const H = 8 / '40'; // { H: 0.2, type: 'number' }

// console.log({ A, type: typeof A }); // { A: 4, type: 'number' }
// console.log({ B, type: typeof B }); // { B: 24, type: 'number' }
// console.log({ C, type: typeof C }); // { C: '85', type: 'string' }
// console.log({ D, type: typeof D }); // { D: 5, type: 'number' }
// console.log({ E, type: typeof E }); // { E: 3, type: 'number' }
// console.log({ F, type: typeof F }); // { F: 21, type: 'number' }
// console.log({ G, type: typeof G }); // { G: '34', type: 'string' }
// console.log({ H, type: typeof H }); // { H: 0.2, type: 'number' }

// Array methods
[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift(); // [2, 3]
[1, 2, 3].unshift(0); // [0, 1, 2, 3]
['a', 'b'].concat('c'); // ['a', 'b', 'c']
['a', 'b', 'c'].join('-'); // a-b-c
['a', 'b', 'c'].slice(1); // ['b', 'c']
['a', 'b', 'c'].indexOf('b'); // 1
['a', 'b', 'c'].includes('c'); // true
[3, 5, 6, 8].find((n) => n % 2 === 0); // 6
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
[3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
[1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
[2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
[2, 3, 4, 5].every((x) => x < 6); // true
[3, 5, 6, 8].some((n) => n > 6); // true
[1, 2, 3, 4].reverse(); // [4, 3, 2, 1]
[3, 5, 7, 8].at(-2); // 7
const arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]
const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]
const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2); // [1, 2, 3, 4, 5, 6]
arr3.flat(Infinity); // [1, 2, 3, 4, 5, 6]

dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
dogs.pop();                             // remove last element
dogs.push("Chihuahua");                 // add new element to the end
dogs[dogs.length] = "Chihuahua";        // the same as push
dogs.shift();                           // remove first element
dogs.unshift("Chihuahua");              // add new element to the beginning
delete dogs[0];                         // change element to undefined (not recommended)
dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)
dogs.slice(1,4);                        // elements from [1] to [4-1]
dogs.sort();                            // sort string alphabetically
dogs.reverse();                         // sort string in descending order
x.sort(function(a, b){return a - b});   // numeric sort
x.sort(function(a, b){return b - a});   // numeric descending sort
highest = x[0];                         // first item in sorted array is the lowest (or highest) value
x.sort(function(a, b){return 0.5 - Math.random()});     // random order sort