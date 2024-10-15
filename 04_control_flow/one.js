// if

// if(condition === true){

// }

// if(condition === false){
//         // code will not execute
// }


const isUSerLoggedIn = true
const temperature = 41

// if(isUSerLoggedIn){

// }

// <, >, >=, <=, ==, !=, ===, !==

// if(2 == '2'){
//     console.log('executed');
    
// }

// if(2 === '2'){  // ===  strict equal will check value and datatype
//     console.log('executed');
    
// }

// if(temperature < 50){
//     console.log('less then 50');
    
// }
// else{
// console.log('temperature is greater then 50');
// }

// const score = 200

// if (score > 100){

//     const power = 'fly'  // can't access this out side the scope
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power: ${power}`);


const balance =1000

// if(balance > 500) console.log('test');   // this is an example of implicit scope without the curly braces 
                                        //the compiler will admit that it is a scope so we an also werite like this 
                                        // we cannot write or recomend to write multiple line in this implicit scope 
                                        // we can do this => [ like if(balance > 500) console.log('test') , console.log('test'); ]
                                        // but it is considered im proessional and will give error in future

// if(balance < 500) {
//     console.log('less then 500'); 
// } else if (balance < 750) {
//     console.log('less then 750'); 

// }else if (balance < 900) {
//     console.log('less then 900'); 

// }else if (balance < 1200) {
//     console.log('less then 1200'); 

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){      // if ny of the single  statement goes fall the codewiil not run inside the scope
    console.log("Allow to buy Courses");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {   // if anyone of the statment goes true the code inside scope will run 
    console.log("USer Loged IN ");    
    
}