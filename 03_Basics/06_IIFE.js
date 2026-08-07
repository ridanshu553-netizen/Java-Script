//Immediately Invoked Function Expression(IIFE)


(function chai(){
    //Named IIFE
    console.log("DB CONNECTED")
})();
//()--> first paranthesis is used for function defination or defining it
//()--> The second one is used for calling the function
//due to the problem of global scope pollution we used iife which imediately runs the function



//Writting iife sunction in the arrow function
//Unamed IIFE
( (name) => {
    console.log(`DB CONNECTED TwO ${name}`)
})("Google")
