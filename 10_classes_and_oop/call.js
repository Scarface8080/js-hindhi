
function SetUsername(username){
    // complex DB calls

    this.username = username
}

function createUser(username, email, password){

    // SetUsername(username)   // this is not calling its just  reference and its not being called 

    SetUsername.call(this, username)  // now the function is being called using call method and hold the reference aswell so we have to pass this as well to get the values otherwise fter the  execution the value will be errsed from the call stack 

    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@fb.com', "123")

console.log(chai);
