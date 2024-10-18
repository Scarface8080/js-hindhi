
// Basic Promise creation & promise consuming


const promiseOne = new Promise(function (resolve, reject){
    // Do an async task
    // DB, calls, Cryptogrpghy, networkCalls
    


    setTimeout(function () {
        console.log("Async task is complete");
        resolve()  //  in order to use/consume the promise we must use the resolve method to connect it with then()
    } , 1000)
})

//  promise consuming

promiseOne.then(function(){
    console.log("Promise consumed");
    
})



//  optimised promise creation and consumtion

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("async 2 resolved");
    
})



//  promise 3

const promiseThree = new Promise(function (resolve, reject){
        setTimeout(function(){
        //  passing data to a resolve function 
        resolve({username : "chai",
                 email: "hamza@google.com"
        })
        }, 1000)
})


promiseThree.then(function (user) {
    console.log(user);
    
})



// promise 4

const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = false

        if(!error){
            resolve({username: "hamza",
                     password:  "123"
            })
        } else {
            reject('ERROR Something went wrong')
        }
    }, 1000)
})


promiseFour.then((user)=> {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);  // to get the dat we have to use then nd to show the  error we hve to use catch 
    
}).catch(function (error) {
        console.log(error);
        
}).finally(() => console.log("The Promise is either resolved or rejected")  // finlly method execute by default telling about the reject or success fter ll the promise consuming 
)


// console.log(userName);    // this will give error  UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR Something went wrong".

// creating and Consuming promise using async await 

const promiseFive = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript",
                     password:  "123"
            })
        } else {
            reject('ERROR JS went wrong')
        }
    }, 1000)
}) 
//  instead of using then and catch method we are using async & await metod
async function consumePromiseFive(){
    try{
        const response = await promiseFive 
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()


// getting data from an api  example  https://jsonplaceholder.typicode.com/users

    // Do an async task
    // DB, calls, Cryptogrpghy, networkCalls   these operation takes time 

// async function getAllUsers() {

//     try {   
        
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()  //  this  json conversion also takes time
//         console.log(data);
//     } catch {
//         console.log("E: ", error);
        
//     }
    
// }
// getAllUsers()


// we can also fetch directely 
fetch ('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {   // we used nother then to get the response returned from the bove then 
    console.log(data);
    
})
.catch((error) => console.log(error))




// ++++++++++++++++++++++  for Interview +++++++++++++++++++++++
// +++++++++++++ link =>    https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch

// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

