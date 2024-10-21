class User {

    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`USername: ${this.username}`);
    }

    static createId(){    // static keyword will prevent the createId method to be instenciated in other objects from the parent calss
        return `123`
    }

}



const hamza = new User("hamza")

// console.log(hamza.createId());  // TypeError: hamza.createId is not a function   =>   because we hve used the static keyword


class Teacher extends User{
    constructor(username, email){

        super(username)

        this.email = email
    }
}

const iphone = new Teacher ("iphone", "i@hone.com")

// console.log(iphone.logme);

iphone.logme()
// console.log(iphone.createId());  // TypeError: hamza.createId is not a function   =>   because we hve used the static keyword
