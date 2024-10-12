
// singleton    object made from a constructs
// Object.create

const mySym = Symbol("key1")  // (Interview Question)=> take a symbol and put it inside the object and print its value 

// Object literals

const JsUser = {
    name: "Hamza",
    "full name": "Hamza Shoukat",
    [mySym] : "myKey1",   //this will not work actually    so we need to use [] to pass it as a symbol key in the object
    age:25,
    location: 'Karachi',
    email: "hamza@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}


// console.log(JsUser.email);  // it will work but not the recommended way

// console.log(JsUser["email"]);  // this is the recommended way to access object values

// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym);  //it will take it as a string so use [] method to acces it as a Symbol;

// console.log(JsUser[mySym]);
// // console.log(typeof JsUser[mySym]);

JsUser.email = "hamza@chat-Gpt.com"
// console.log(JsUser['email']);

// Object.freeze(JsUser)    // freez will not alow to change/update teh oject values 

JsUser.email = "hamza@microsoft.com"


// console.log(JsUser['email']);
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
    
}

// console.log(JsUser.greeting);  // gives undefined
 


JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);  // whenerve we want to reference same object we use this 
    
}

console.log(JsUser.greeting()); 
console.log(JsUser.greeting2());

