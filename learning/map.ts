const usersMap = new Map([
  ['admin', { id: 1, status: 'loggedIn'}],
  ['starter', { id: 2, status: 'offline'}],
  ['user1', { id: 3, status: 'loggedIn'}],
  ['user2', { id: 4, status: 'offline'}],
]);

console.log('set main =>', usersMap.set('main', { id: 5, status: 'loggedIn'})); // sets a key-value pair and returns new updated Map
console.log('usersMap => ', usersMap);
Array.from(usersMap).map(user => console.log({ key: user[0], status: user[1] })); // we have to convert to array to use array methods
Array.from(usersMap.keys()).map((key, idx) => console.log(`key ${idx + 1} => `, key)); // returns all keys of map
Array.from(usersMap.values()).map(({ id, status }) => console.log({ id, status })); // returns all values of map
console.log('get value of admin =>', usersMap.get('admin')); // returns value from key
Array.from(usersMap.entries()).map(user => console.log('entry', user)); // returns arrays of key-value pairs
usersMap.delete('admin'); // deletes item with key
console.log('map length', usersMap.size); // returns length or size of map
console.log('has admin =>', usersMap.has('admin')); // returns true or false if it has key
console.log('has main =>', usersMap.has('main')); // returns true or false if it has key
usersMap.forEach(user => console.log('user', user)); // forEach returns values of of each item
usersMap.clear(); // clears all items from map, returns an empty map
console.log(usersMap);
console.log(Array.from(usersMap));

// Method	Description
// new Map()	Creates a new Map object
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// clear()	Removes all the elements from a Map
// delete()	Removes a Map element specified by a key
// has()	Returns true if a key exists in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// keys()	Returns an iterator object with the keys in a Map
// values()	Returns an iterator object of the values in a Map
// size	Returns the number of Map elements