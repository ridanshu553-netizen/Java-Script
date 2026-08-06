function calculateCartPrice(val1,val2,...num1){ //Rest operator for passing multiple value to the function
    return num1
}
// console.log(calculateCartPrice(200,400,700,2000))

// const user={
//     username:"Ridanshu",
//     price:199
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject["username"]} and and price is ${anyobject["price"]}`)
}
// handleObject(user)
handleObject({
    username:"Sam",
    price:799
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
