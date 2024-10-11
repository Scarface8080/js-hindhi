// array


const myArr = [1,2,3,4,5,6]

const myHeros = ["Superman" , "Batmen"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2);


// console.log(myArr[0]);

// deep copy   & Shallow Copy   https://developer.mozilla.org/en-US/search?q=Shallow+Copy

// Array methods

// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

//  slice , splice
//  interview Question different between slice & splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1,3)
console.log("C", myArr);

console.log(myn2);

