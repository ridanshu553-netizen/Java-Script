//Stack memory-->Primitive Datatype(gets a copy of the declared variable)
//Heap memory-->Non Primitive Datatype(Refrence of the orignal value of the variable means changing in it will cahnge in orignal value)
// let myname="Ridanshu"
// let anothername=myname
// anothername="Ram"
// console.log(myname);
// console.log(anothername);

let userOne={
    email:"user@googlegmail.com",
    upi:"user@ybl"
}
let userTwo=userOne

userTwo.email="Ridanshu@googlegmail.com"
console.log(userOne.email);
console.log(userTwo.email);
