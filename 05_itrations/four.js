// to make the objects other then => [ Map() ] iterble we use for in loop 


const myObject = {

    js:  'javascript',
    cpp: 'C++',
    rb:   "rubby",
    swift:  "swift by apple",
}

for (const key in myObject) {
    
    // console.log(key);

    // js
    // cpp     this will be the output only keys
    // rb
    // swift
    
    // to get the values also 

    // console.log(myObject[key]);
    
    // this will be the output
    // javascript
    // C++
    // rubby
    // swift by apple

    // console.log(`${key} shorcut is for ${myObject[key]} `);


}

//  for Aray alos

const programing  = ['ja', 'rb', 'py', 'java', 'cpp' ]

for (const key in programing) {
    // console.log(key);
    // 0
    // 1
    // 2    this will be the output only keys 
    // 3
    // 4


    // to get values 
    // console.log(programing[key]);
    // ja
    // rb
    // py   this will be the output
    // java
    // cpp
}



// Maps() is not iterable on for in loop this will not work no output will be shown  

// const map = new Map()

// map.set('IN', "India")
// map.set('USA', "America")
// map.set('Fr', "France")


// for (const key in map) {
//     console.log(key);
    
// }