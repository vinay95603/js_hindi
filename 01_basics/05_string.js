const name = "vinay";
const repoCount = 10;

// console.log(name + repoCount + " Value" );

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); 
// string Interpolation

const gameName = new String ('vinay-ghb');

// console.log(gameName[4]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "            vinay          ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vinay.com%20sachdeva";

console.log(url.replace("%20", "-"));

console.log(url.includes("vinay"));

console.log(gameName.split('-'));