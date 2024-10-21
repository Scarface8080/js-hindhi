

// console.log(Math.PI);

// Math.PI = 5

// console.log(Math.PI);

// const discripter = Object.getOwnPropertyDescriptor(Math, "PI")   // getOwnPropertyDescriptor willl give the detail about the hidden values properties of an object


// console.log(discripter);


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nai bani");
        
    }
}


console.log(Object.getOwnPropertyDescriptor(chai, "name"));  // if we write just object name it will give us undefined output so we have to give the roperty name as welll 

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true,
    // configurable: false,
    // iterable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name")); 

// for (const [key, value] of chai) {
//     console.log(`${key} : ${value}`);    //TypeError: chai is not iterable  by default object are not iterateable
    
// }

for (const [key, value] of Object.entries(chai)) {

    // console.log(`${key} : ${value}`); 
    // name : ginger chai
    // price : 250
    // isAvailable : true           // this will be the output 
    // orderChai : function(){      // but we only need the values not a function like this 
    //         console.log("chai nai bani"); 
             
    //     }


    // so we will add a condition for this purpose 

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`); 

    }

} 
    
    // Object.entries(chai)  this will makethe object iteratable 