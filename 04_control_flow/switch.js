//Base Syntaxt 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



const month = "3"

switch (month) {
    case 1:
        console.log("January");
        
        
        break;

    case 2:
        console.log("Feb");
        
        
        break;
    case 3:
        console.log("march");
        
        
        break;    // remeber to use break if we dont use it or commet it then it will run all the cases except the default => (interview question)

    case 4:
        console.log("april");
        
        
        break;

    


    default:    // this will run only when nun of the case matched 
        break;
}



//  In case of string 

const month1 = "march"

switch (month1) {
    case "jan":    // inscae of string just use string instead of the key but remember the case sensitivity 
        console.log("January");
        
        
        break;

    case "feb":
        console.log("Feb");
        
        
        break;
    case "march":
        console.log("march");
        
        
        break;    // remeber to use break if we dont use it or commet it then it will run all the cases except the default => (interview question)

    case 4:
        console.log("april");
        
        
        break;

    


    default:    // this will run only when nun of the case matched 
        break;
}