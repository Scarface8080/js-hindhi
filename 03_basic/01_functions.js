



// function syMyName(){
//     console.log("T");
//     console.log("H");
//     console.log("a");
//     console.log("D");
//     console.log("G");
//     console.log("H");
// }

// syMyName()  // syMyname is the reference and () is the execution

// function addTwoNumbers(numb1, numb2){
//     console.log(numb1 + numb2);
    
// }

// const result = addTwoNumbers(3, 5)



// console.log("Result:", result); // it will sjow us undefind thats why we have to use a return statement


function addTwoNumbers(numb1, numb2){
        // let result = numb1 + numb2
        
        // return result    
        return numb1 + numb2  // can also use like this 
        console.log("hamza"); // nothing will execute after return statement 
        
}

addTwoNumbers()

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    // }
            // or we can also use this
    if(!username){
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

// loginUserMessage("hamza")   // will not show value cuse its justs returning value not printing it 

// console.log(loginUserMessage()); // will give undefined if not passing value
// console.log(loginUserMessage("Hamza"));


// function calculateCartPrice(num1){   // will only show the first number so we have to pack them in a bundel

//     return num1
// }
 
// console.log(calculateCartPrice(22, 400, 500));   // will only show the first number so we have to pack them in a bundel



function calculateCartPrice(val1, val2, ...num1){   // we made a bundel now using (...num1)=> rest  operator  to get all other values 

    return num1
}
 
// console.log(calculateCartPrice(22, 400, 500, 2000)); 

// passing an object to a function 

const user = {
    name: "hamza",
    price: 199,
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}

// handelObject(user)
handelObject({
    name: "hamza",   // we can pass direct object also
    price: 199,
})

//  we can alos pas an arry like object 

const myNewArrray = [200, 300, 400,500]

function returnSecondValue(getArray){

    return getArray[1]
}

// console.log(returnSecondValue(myNewArrray));
console.log(returnSecondValue([1000, 2000, 3000, 4000]));  // we can also pass an array directely to a function 


