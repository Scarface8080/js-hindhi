// ++++++++++++++++++++++++++++++++   SCOPE  +++++++++++++++++++++++++++++

// var c = 300
// Global scope
// let a = 300

// {} scope

// if (true){
//     // the code inside is block scope
//     let a = 10
//     const b = 20 
//     // var c = 30
//     // c = 30  this and var are same

//     console.log("INNER:", a);

    
    
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

// ++++++++++++++ Nested Scope ++++++++++++++++++++

function  one(){
    const username = "hamza"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }

    // console.log(website);
    
    // two()
}

one()


if(true){
    const username = "hamza"

    if(username === "hamza"){
        const website = " youtube"
        // console.log(username + website);
        
    }

    // console.log(website);
    
}

// console.log(username);


// ++++++++++++++++++++++++++++++++++++ Intrestig +++++++++++++++++++++++++++++++++++++
// console.log(addone(5))
// function addone(numb){

//     return numb + 1
// }


// addtwo(5)                          // it will give ReferenceError: Cannot access 'addtwo' before initialization  => we can't call function before declration in function expression
// const addtwo = function(num){        // this is basically a function expression like storing function inside a variable 
//     return num + 2
// }


