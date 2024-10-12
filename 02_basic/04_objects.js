// singleton

// const tinderUser = new Object()

// console.log(tinderUser);


// Non singleton

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Hamza"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nesting objects

const regularUser = {
    email : "hamza@google.com",
    fullname: {
        userfullname:{
            firstname: "Hamza",
            lastname:  "Shoukat",
        }
    }
}

// console.log(regularUser.fullname.userfullname);

// Obejcts Merging

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "a",
    4: "b",
}

const obj3 = {
    3: "a",
    4: "b",
}

// const object = {obj1 , obj2}

// const obj4 = Object.assign({}, obj1 , obj2, obj3)    // {} (also called target) this is an optional parameter but its a good practice to give this to combine all the values and give  combine result
                                              //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


//   can also use sperd operator to sperad and merge them    90% we use this method
const obj4 ={...obj1, ...obj2, ...obj3}
// console.log(obj4);

// incase if value came from database it comes as array of objects

const users = [
    {
        id: 1,
        email: "hamza@google",
    },
    {
        id: 1,
        email: "hamza@google",
    },  {
        id: 1,
        email: "hamza@google",
    }
]

users[1].email

// console.log(tinderUser);


// console.log(Object.keys(tinderUser));    // results will be dhown in a array

// console.log(Object.values(tinderUser));    
// console.log(Object.entries(tinderUser));    


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // to find a property in any object


// +++++++++++++++++++++++++++++++++OBJECTS Destructuring +++++++++++++++++++++++++++++++++++++++++

const course = {
    coursname: "JS in Hindhi",
    price: "999",
    courseinformation: "Hamza",
}


// course.courseinformation
// course.courseinformation  // instead of write this everytime to access object property we can use the other method below
// course.courseinformation

// const {courseinformation} = course
const {courseinformation : instructor} = course   // we can also rename the property of object with this 

// console.log(instructor);

//  we use object destructuring in react 

// const navbr = ({company}) => {

// }

// navbr(company = 'Hamza')

// +++++++ Jason also comes in object formate ++++++
// the keys in jasons are also a string
// {
//     "name": "hamza",
//     "coursename": "js in hindhi",
//     "price": "free",
// }

// sometime api also gives data in arry of object
// [
//     {},
//     {},
//     {},
// ]


