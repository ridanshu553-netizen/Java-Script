// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//DataType should be of same type to be compare

// console.log("2">1);
// console.log("02">1);


console.log(null>0);
console.log(null==0);
console.log(null>=0);

//the reason is that an eqality check== and comparisions > < >= <= work differently
//Comparision convert null to a number, treating it as 0
//That's why (3) null >=0 is true and (1) null>0 is false

console.log(undefined==0); //always give false with the all comparrision operators

// === it strictly chcks the value like dataType

console.log("2"===2);
