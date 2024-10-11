// # Primitive datatype

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')   // even if we give same value still it will be consider different/unique using symbol sataType
  
console.log(id === anotherId);

const bigNumber = 331233313346684621n





// Reference Type (Non Primitive)

// Array, Objects, Functions

const heros = ["Superman", "Batmen", "DeadPool"]

let myObj = {
    name:"Hamza",
    age:24,
}

const myFunction = function (){
    console.log("hello World");
    
}

// console.log(typeof anotherId);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (premitive) , Heap (Non-Premitive)

let myYoutubeName = "randomguy"
anotherName = "anotherguy"

console.log(myYoutubeName);
console.log(anotherName);



let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "hamza@google.com"

console.log(userOne);
console.log(userTwo);

