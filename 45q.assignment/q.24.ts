
//Tests for equality and inequality with strings
 const string1: string = "sadoon" 
const string2: string = "orhaan"
  
console.log(string1 === string2);  //false
  
console.log(string1 !== string2);  //true

//  Tests using the lower case function

const upperCase : string = "SADOON";
const lowerCase : string = "orhaan";

console.log(upperCase.toLowerCase() === lowerCase); //false


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
  
const numerical1 : number = 20
const numerical2 : number = 50

console.log(numerical1 === numerical2);  //false
console.log(numerical1 !== numerical2);  //true

console.log(numerical1 > numerical2); //false
console.log(numerical1 < numerical2); //true

console.log(numerical1 >= numerical2); //false
console.log(numerical1 <= numerical2); //true


//  Tests using "and" and "or" operators

const a : number = 10
const b : number = 30
const c : number = 50

console.log(a < b && b < c ); //true
console.log(a > b || b < c ); //false

// Test whether an item is in a array
 const array1 : number[] = [1,2,3,4,5,6];
 const itemToFind : number = 3;

 console.log(array1.indexOf(itemToFind) !== -1);  //true


// Test whether an item is not in a array
console.log(array1.indexOf(10) === -1);  //true
