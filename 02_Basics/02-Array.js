const heros=["SpiderMan","Woolverine","Ghost Rider"]
const dc=["SuperMan","Flash","BatMan"]

// heros.push(dc)

// console.log(heros);

// const newHeros=heros.concat(dc) //Concat returns the new array and it is more easy

// console.log(newHeros);

const allnewHeros=[...heros,...dc];//This is the extended method or spread method and is more oftenly used method to concat two or more array

// console.log(allnewHeros);

const Arr1=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherArray=Arr1.flat(Infinity)

console.log(realanotherArray);


console.log(Array.isArray("Ridanshu")); //Checks if it is the array or not
console.log(Array.from("Ridanshu")); //Makes it the new Array like in this case it makes this string to this array
console.log(Array.from({name:"Ridanshu"}));

let Score1=100
let Score2=200
let Score3=300

console.log(Array.of(Score1, Score2, Score3)) //It makes the array of the multiple variables into a one array
