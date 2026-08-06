// let a=10
// const b=20
// var c=30

//{}-->Scope of a variable
//Global scope is this

let a=300;
if(true){ //Block Scope
    let a=10
    var c=30
    const b=20
    console.log("Inner: ",a)
}

console.log(a);
// console.log(b);
console.log(c);
