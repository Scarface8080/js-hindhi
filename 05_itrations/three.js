// for off loop 


// Arrays specific loops

// ["", "", ""]
// [{}, {}, {}]


// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {

//     console.log(num);
    
    
// }


// const greetings  = "Hello World"

// for (const greet of greetings) {
    
//     console.log(`Each Caracter is ${greet}`);
    
// }



// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "America")
map.set('Fr', "France")
// map.set('Fr', "France")      // Duplicate calue dont work in map object 

// console.log(map);


for (const key of map) { 
    
    console.log(key);
    
}
// this will be the output  
// [ 'IN', 'India' ]
// [ 'USA', 'America' ]
// [ 'Fr', 'France' ]

//  to get output sepertely 


// for (const [key,value] of map) { 
    
//     console.log(key , ':-', value);
    
// }

// Output will be like this 
// IN :- India
// USA :- America
// Fr :- France

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spidermen'
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spidermen'
// }

// for (const [key, value] of myObject) {

//     console.log(key, ':-', value);   /// TypeError: myObject is not iterable   only map objects are iterble while there are other methods for objects
    
    
// }