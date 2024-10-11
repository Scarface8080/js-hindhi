const name = "hamza"
const repoCount = 50

// old way 
// console.log(name + repoCount + "value")

//  modren and recommended way
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hamza-sh-o-uk-at')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));

const newString = gameName.substring(0,4)

console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "   hamza    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://github.com/Scar%20face8080"


console.log(url.replace('%20' , ''));
console.log(url.includes('8080'));


console.log(gameName.split('-'));

