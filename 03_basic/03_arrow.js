const user = {
        username :  "hamza",
        price: 999,

        welcomemessage: function() {
            console.log(`${this.username} , Welcome to website`);
            console.log(this);
            
        }


}


// user.welcomemessage()

// user.username = "jhon"

// user.welcomemessage()

// console.log(this);   // in browser the global object is window object interview question


// function chai(){
//     let username = " hamza"
//     console.log(this.username);            // we cannot use this inside a function it will give us undefined value 
    
// }

// chai()


const chai = function () {
        let username = " hamza"
        console.log(this.username);             // we cannot use this inside an function it will give us undefined value 
    
}


// chai()


// const one = () => {                         //() =>
//     let username = " hamza"
//     console.log(this);             // we cannot use this inside an function it will give us undefined value 
//                                     // ++++++++++ Interview Question +++++++++++++
//                                     // difference between normal function 7 Arrow function 
//                                     // (normal function shows window object on console log & arrow function shows empty object like this {})
// }


// one()

// const addtwo = (num1, num2)=> {
//     return num1 + num2                    // this is an example of normal arrow function 
                                            // with curly braces we hae to use return 
                                            // this is an example of explicit return 
// }

// console.log(addtwo(3 , 4));



const addtwo = (num1, num2)=>  num1 + num2                    // this is an example of implicit return arrow function  arrow function 
                                                            // without curly braces and return statement but it will asume this as a single function 
console.log(addtwo(3 , 4));




const addthree = (num1, num2)=>  (num1 + num2)                //
                                                             // this is an example of implicit return arrow function  arrow function 
                                                            // without curly braces and return statement but it will asume this as a single function 
console.log(addtwo(3 , 4));




const addfour = (num1, num2)=>  ({username: "hamza"})                // we can use object inside the round bracket as well
                                                             // this is an example of implicit return arrow function  arrow function 
                                                            // without curly braces and return statement but it will asume this as a single function 
console.log(addfour(3 , 4));