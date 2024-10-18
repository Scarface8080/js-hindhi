// Object literal


const user = {
    username: "hamza",
    loginCount: 8,
    signedIn: true,


    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
        
    }
}



// const user2 = {
//     username: "hamza",
//     loginCount: 8,
//     signedIn: true,


//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         // console.log(this);
        
        
        
//     }
// }

// console.log(user.getUserDetails());

// console.log(this);



//  this is a normal example of constructor 
// const  promiseOne = new Promise()
// const date = new Date()

/// step new object is being created
function User(username, loginCount, isLoggedIn){
    this.myusername = username;
    this.loginCout = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function (){
        console.log(`Welcome ${this.username}`);
        
    }

    return this    // by default it is defined implicitly so we don need to add it also but for info 
}


//  step 2 constructor function being called using new keyword 
//  step 3 this keyword injects arguments 

const userOne = new User("hamza", 12, true)  
const usertwo = new User("ChaiaurCode", 12, true)

console.log(userOne.constructor);
// console.log(usertwo);
