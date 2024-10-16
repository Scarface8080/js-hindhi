// map function return value automaically 


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums   = myNumbers.map((num) => num + 10)


// / method chaning 
const newNums   = myNumbers.map((num) => num * 10 )
                           .map((num) => num + 1)    // this will get the resulted value form the first or abovve map method 
                           .filter((num) => num >= 40)
console.log(newNums);
