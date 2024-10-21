// let myName = "hamza    "

// console.log(myName.length);


// to remove spaces we can you trim() by defult but were not using here we will make  prototype for it 


let myHeros = ['thor', 'spidermen']

let heroPower = {
    thor: 'hammer',
    spidermen: 'sling',

    getSpiderPower: function(){
        // console.log(`Spidy power is ${this.spidermen}`);
        
    }
}

Object.prototype.hamza = function()
{
    // console.log(`hamza is present in all objects`);
    
}


Array.prototype.heyHamza = function(){
    // console.log(`Hamza says hello`);
    
}

// heroPower.hamza()

myHeros.hamza()
myHeros.heyHamza()
// heroPower.heyHamza()


//+++++++++++ inheritence ++++++++++

const User = {
    name: "hamza",
    email: "hmza@google.com"
}

const Teacher = {
    makeVideo: true,

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssingment: "JS assingment",
    fullTIme: true,
    __proto__: TeachingSupport  // getting access from other object using     __proto__
}



Teacher.__proto__= User  // can also do like this 

// modren syntaxt

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "HamzaShoukat              "

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);

    console.log(`True lenght is: ${this.trim().length}`);
    
    
}

anotherUserName.trueLenght()


// now we can use the property directly also with the string

"hamza  ".trueLenght()
"isceTea  ".trueLenght()