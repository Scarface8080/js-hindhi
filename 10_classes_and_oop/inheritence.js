class User {
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username, email, password){

        super(username)  // it will pass the this keyword automatically and get the username from the parent/User class 

        this.email = email
        this.password = password
        
    }

    addCourse(){
        console.log(`A new Course ws added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")


chai.addCourse()


const masalaChai = new User("masalaChi")
// masalaChai.addCourse()
masalaChai.logme()


console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
