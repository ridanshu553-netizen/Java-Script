const user={
    username:"Ridanshu",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        //This keyword is used for current context
    }
}


// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){

//     let username="Ridanshu"

//     console.log(this.username)
// }
// chai()

// const chai=function(){
//     let username="Ridanshu"
//     console.log(this.username)
// }
// chai


//Declration of Arrow Function 
const chai=() => {
    // let username="Ridanshu"
    // console.log(this)

}
// chai()

// () =>{} this is the basic syntax of the Arrow function

// const addTwo=(num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4))

//Implicit Return -->In this we dont use paranthesis and return keyword and we do it in same line

// const addTwo=(num1,num2) => num1+num2

// console.log(addTwo(3,4))

// const addTwo=(num1,num2) => (num1+num2)

// console.log(addTwo(3,4))

const addTwo=(num1,num2) => ({username:"Ridanshu"}) //Objects cannot be returned without paranthesis in the function
// console.log(addTwo())

