// Immediately Invoked function Expressions    (IIFE)
// used to prevent the local scope to getpalluted from the global scope value


(function chai(){     // this is a named IIFE
    console.log(`Db CONECTED`);
    
})();  // => this is the execution round brackets for iife function   => must close it with an : otherwise it will  give error TypeError: (intermediate value)(...) is not a function

// ()()  // first round bracket show function defenation and secon showws execution 

((name)=>{          // this is  a simple IFFE
    console.log(`Db CONECTED Two 4 {name}`);
    
})('hamza');     // we pass arrguments in the second round bracket 