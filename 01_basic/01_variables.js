const accountId = 144533
let  accountName = "jhonDoe";
var accountPassword = "12345"
acountCity = "karachi"
let accountState;

// accountId = 2 not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope  
*/


accountName = "hamza";

console.log([accountId, accountName , accountPassword , acountCity ]);
console.table([accountId, accountName , accountPassword , acountCity,  accountState]);
