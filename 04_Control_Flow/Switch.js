// switch (key){
//     case value:

//         break;
    
//     default:
//         break;
// }

const month=3
// const month="march"

switch(month){
    
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;      // If there is no break statement, it will continue to execute the next case until it finds a break or reaches the end of the switch statement but it does not print the value of default

    case 4:
        console.log("April");
        break;

    default:
        console.log("Default Case Match");
        break;
    
}