//Singleton-One object entire the application in js like there is one principal in the school and the pricipal is the same as singleton

//Object Literals
// Object.create // this a constructor method to make the object and singleton is made inside this only

const mySym=Symbol("Key1") //Creation of symbol

const JsUser={ //Object creation
    name:"Ridanshu",
    "Full Name":"Ridanshu Chaudhary",
    [mySym]:"MyKey1",
    age:18,
    location:"Jaipur",
    email:"Ridanshu@googlegmail.com",
    isLoggedIn:false,
    lastLoggedinDays:["Monday","Saturday"]
}

//Accessing the objects

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

//Changing the values in the objects

JsUser.email="Ridanshu@chatgptgmail.com"

// console.log(JsUser["email"]);


//we can freeze the object by using the Freeze keyword so that no change can be done in the objects after the creation


// Object.freeze(JsUser)
JsUser.email="Ridanshu@microsoft.com"

// console.log(JsUser)


//Defining a functon in the Java Script

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
