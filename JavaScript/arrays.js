// Arrays

const myArr = [1, 2, "Hello", true, null]

console.log(myArr);

const movies = ["Dhurandhar", "Dune", "Toxic", "Tenet", "Pushpa", "Batman"];

console.log(movies.length);

// Indexing 

console.log(movies[3]);
console.log(movies.indexOf('Pushpa'));
console.log(movies.at(-1));

movies[2] = 'Odyssey';
console.log(movies);

// Slicing

console.log(movies.slice(1, 4));
console.log(movies.slice(-2));
console.log(movies.slice(-3));
console.log(movies.slice(-3, -1)); // Always going left to right

// adding and removing elements

movies.push('RRR')
movies.unshift('KGF')
console.log(movies);

movies.pop();
movies.shift();
console.log(movies);

// Splice funtion

// movies.splice(3, 2); // For Removing Element
// movies.splice(3, 2, "Superman", "SuperGirl") // For Replacing elements
movies.splice(3, 0, "Superman", "SuperGirl") // For Shifting elements


console.log(movies);
