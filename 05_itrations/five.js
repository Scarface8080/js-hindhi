//  for each loop 

const coding = ['js', 'ruby', 'java', 'pythone', 'cpp']

// coding.forEach( function (item) {

//     console.log(item);
    
// } )


// can also use arrow function 
// coding.forEach((val) => {
//     console.log(val);
    
// })



// can also pass custom function but only give the reference no ( braces !)
// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);


//  foreach has index, and list of arry also 

coding.forEach((item, index, arr)=> {
    // console.log(item, index, arr);
    


    // js 0 [ 'js', 'ruby', 'java', 'pythone', 'cpp' ]
    // ruby 1 [ 'js', 'ruby', 'java', 'pythone', 'cpp' ]
    // java 2 [ 'js', 'ruby', 'java', 'pythone', 'cpp' ]
    // pythone 3 [ 'js', 'ruby', 'java', 'pythone', 'cpp' ]    this will be th output
    // cpp 4 [ 'js', 'ruby', 'java', 'pythone', 'cpp' ]
})


const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js",
    },
    {
        languageName: "java",
        languageFile: "java",
    },
    {
        languageName: "python",
        languageFile: "py",
    },
]

myCoding.forEach((item)=> {

    // console.log(item);

    // { languageName: 'javascript', languageFile: 'js' }
    // { languageName: 'java', languageFile: 'java' }           this will be the output it will take object as an item 
    // { languageName: 'python', languageFile: 'py' }
    
    // to get he value 
    

    console.log(item.languageName);


})