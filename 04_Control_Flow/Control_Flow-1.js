//if

// if(true){
//     console.log("True");
// }

// if(false){
//     console.log("False");    
// }




// const isUserLoggedIn=true;
// if(isUserLoggedIn){

// }

if(2==="2"){  //=== triple equal strictly checks for value and data type we are comparing
    console.log("Executed");
}



//<, >, <=, >=, ==, !=, !==, ==, ===

const temperature=30;
if(temperature===61){
    // console.log("Less than 50");
}
else{
    // console.log("Temperature is equal to 61");
}
// console.log("Temperature is greater than 50");

const score=200;
if(score>100){
    const power="Fly";
    // console.log(`The power of User is ${power}`);
}

const balance=1000;

// if(balance>500) console.log("Run"),console.log("Run2");

if(balance < 500){
    // console.log("less Than 500");
}
else if(balance < 750){
    // console.log("less Than 750");
}
else if(balance <900){
    // console.log("less Than 750");
}
else{
    // console.log("Less Than 1200");
}

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;


if(userLoggedIn && debitCard){
    // console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In");
}
