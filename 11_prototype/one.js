// in Javascript everything is an object


function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2  // function is aloso an objects

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
                                                                // ++ This ka matlab jiss
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new  createUser("chai", 25)
const tea =  new createUser("tea", 250)

chai.printMe()