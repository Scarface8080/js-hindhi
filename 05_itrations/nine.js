//  Reduced method mostly use in shoping cart 
//  for more info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const myNUms = [1,2,3]


// const myTotal = myNUms.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)   // < = this is the initial value 
 
const myTotal = myNUms.reduce((acc, curr) => acc + curr , 0) // <= initial val of acc

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'js course',
        price:     3000,
    },
    {
        itemName: 'python course',
        price:     4999,
    },
    {
        itemName: 'mobile dev course',
        price:     5999,
    },

    {
        itemName: 'data science course',
        price:     12999,
    },
]


const priceToPay =  shoppingCart.reduce((acc, item) => acc + item.price , 0)


console.log(priceToPay);

