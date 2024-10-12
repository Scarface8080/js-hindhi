// ++++++++++++++++++++++++++++++++   SCOPE  +++++++++++++++++++++++++++++

// var c = 300
// Global scope
let a = 300

// {} scope

if (true){
    // the code inside is block scope
    let a = 10
    const b = 20 
    // var c = 30
    // c = 30  this and var are same

    console.log("INNER:", a);

    
    
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

console.log(a);
// console.log(b);
// console.log(c);
