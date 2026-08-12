// const tinderUser=new Object()  //This is a singleton object

const tinderUser={  //while this one is a non singletn object

}
tinderUser.id="123abcd"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);
// console.log(tinderUser["name"]);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ridanshu",
            lastname:"Chaudhary"
        }
    }
}

console.log(regularUser["fullname"]["userfullname"]["firstname"])

// ?-->This helps in the if the variable object does not exist in that case we use it

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
const obj3={...obj1,...obj2} //for joining two or more object and returning a new object

// const obj3=Object.assign({},obj1,obj2) //Another way of joining two or more objects and returning a new object

console.log(obj3)


//objects inside the array
const Users=[
    {
        id:1,
        email:"some@gmail.com"
    },
    {
        id:2,
        email:"some1@gmail.com"
    },
    {
        id:3,
        email:"some@gmail.com"
    }

]
console.log(Users)
console.log(Users[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser)); // All the Objects Keys are stored in the array so that fuether loops can be applied on that array
console.log(Object.values(tinderUser)); // All the Objects values are stored in the array so that fuether loops can be applied on that array
console.log(Object.entries(tinderUser)); // All the Objects entries are stored in the array so that fuether loops can be applied on that array
console.log(tinderUser.hasOwnProperty("isLoggedIn")) //finds out is that this property is in the object or not and it returns the values in the boolean


