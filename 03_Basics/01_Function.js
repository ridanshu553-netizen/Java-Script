// console.log("R");
// console.log("I");
// console.log("D");
// console.log("A");
// console.log("N");
// console.log("S");
// console.log("H");
// console.log("U");

function name(){
    console.log("R");
    console.log("I");
    console.log("D");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}

// name()

// function add(a,b){
//     console.log(a+b);
// }
// add(10,10)

// function addTwoNumbers(number1,number2){ 
//     let result
// }

function addTwoNumbers(number1,number2){ //We dont have specify the data type of the parameters in Java Script
    // let result=number1+number2
    // return result //after the return argument nothing will be excecuted by the function
    // console.log("Ridanshu")  // This will not be print as it will not return any thing
    return number1+number2
}


// console.log(addTwoNumbers(3,4))

// const result=addTwoNumbers(3,4) //Arguments are the values passed to the function
// console.log(result)

function loginUserMessage(username="sam"){
    if(username===undefined){
        console.log("please enter the username")
        return
    }
    return`${username} just logged in`
}
console.log(loginUserMessage("Ridanshu"))

console.log(loginUserMessage()) // When you do not pass any argument then it will return the undefined not null
