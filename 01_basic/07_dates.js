// Dates


let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);   // Interview question

// let myCreatedDate = new Date(2023, 0, 23)

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)

// let myCreatedDate = new Date("2023-01-14")

let myCreatedDate = new Date("01-14-2023")


// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  

// console.log(Math.floor(Date.now()/1000)); // interviw question get time in seconds

let newDate = new Date()
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());


//  Steing Interpolation   `${newDate.getDay()} and the time`


newDate.toLocaleString('default' , {
    weekday: "long",
    timeZone: 'timeZone',
})


