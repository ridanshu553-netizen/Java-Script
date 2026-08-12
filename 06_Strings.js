const name="Ridanshu"
const repoCount=3

// console.log(name+repoCount)//This is not the preffered way to writte the syntax in the modern world

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);//string interpollation is the modern way to represent in the modern way

//another way of representing the string
const gameName=new String("Subway Surfer-s");
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("b"));

// const newString=gameName.substring(0,4)
// console.log(newString);

const newStringOne="  Ridanshu   "

console.log(newStringOne.trim());

const url="https://Ridanshu.com/Ridanshu%20Chaudhary"
console.log(url.replace("%20","-"))

console.log(url.includes("Ridanshu"))
