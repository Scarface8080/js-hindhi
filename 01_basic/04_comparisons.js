// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);


/* avoid this type of comparisons

console.log(null > 0);      
console.log(null == 0);
console.log(null >= 0);   // the reason is that an equality check == and comparisons > < >= <= work differently.
                          // comparisons convert null into numbers, treating it as 0.
                          // thats why (3) null > = 0 is true and (1) null > 0 is false.
console.log(undefined == 0 );
console.log(undefined > 0 );
console.log(undefined < 0 );

*/

// ===  strictly check value and dataType

console.log("2" === 2);
