const userEmail = "jhamza@google.com"

if(userEmail) {  // this is the example of truthy if statement it asuemes that the condition is tru even it is wron => if(userEmail) {}
    console.log("Got the user email")
} else {
    console.log("Don't got the user email");
    
}

// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'fasle', " ", [], function(){} 

const userEmail1 = []   // this is the way of checking array in truty if statement 

if (userEmail1.length === 0) {
    console.log("Array is empty");
    
}


// +++++++  checking objects in truty if statement  +++++++

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {  // it will return the object as n rray
        console.log("Object is empty");
        
}

// ++++++Interview Question +++++++
// output in browser console 
// false == 0
// true
// false == ""
// true
// 0 == "
// undefined
// 0 == " "
// true

//++++++++++++ Nullish Coalescing Operator (???): null undefined +++++++++++++

let val1;
// val1 = 5  ?? 10    // this ?? shows either the variable has 5 or 10 value

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 100  // it wil get the first value 10 only ehaterver is on the first after the null or undefined 


// val1 = null ?? 10

console.log(val1);


//  ++++++++++++++ Ternery Operator ++++++++++++++++

// condition ? true : false 

const iceTEaPrice = 100

iceTEaPrice >= 80 ? console.log("more then 80") : console.log("less then 80")


