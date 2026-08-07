//array
//JavaScript arrays are resizable and they are not associative arrays 

const myArr=[0,1,2,3,4,5,6,7]

const myHeores=["Shaktiman","Nagraj"]

const myArr2= new Array(1,2,3,4,5,6,7)

// console.log(myArr[0]);

//Array Methods

myArr.push(8) //It is used add the number 8 at the end of the array
myArr.push(9)

myArr.pop() //It removes the last value of the Array

myArr.unshift(9) //It place the number at the starting of the array
myArr.shift() //It removes the number that is placed at the starting of the array using unshift method


// console.log(myArr.includes(9))

// console.log(myArr.indexOf(7))

const newArr=myArr.join();// Joins the array and convert the new array into the string


// console.log(myArr)
// console.log(newArr)

//Slice, Splice

console.log("A ",myArr);

console.log("B ",myArr.slice(1, 3));

console.log("C ",myArr);

console.log("D ",myArr.splice(1, 3));

console.log("E ",myArr);
// Slice does not manupliate the real array while splice manupliates the real array
