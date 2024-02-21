// dynamic regex

const str0 = "Hello, world!";
const searchWord = "hello";
const patternStr = `${searchWord}`;

const pattern0 = new RegExp(patternStr, "i");

console.log(pattern0.test(str0));

// Suche nach Mustern
const str = "Hello, world!";
const pattern = /hello/i;

console.log(pattern.test(str)); // Output: true

// Ersetzen von Teilen eines Strings

const str2 = "Hello, world!";
const newStr = str2.replace(/wo/g, "universe");
console.log(newStr); // Output: Hello, universe!

// Extrahieren von Informationen
const str3 = "Name: John Doe, Age: 30";
const matches = str3.match(/Name: (\w+ \w+), Age: (\d+)/);
console.log(matches[1]); // Output: John Doe
console.log(matches[2]); // Output: 30
console.log(matches);

// Aufteilen von Strings
const str4 = "apple0banana1orange";
const parts = str4.split(/[0-9]/);
console.log(parts); // Output: ['apple', 'banana', 'orange']
