//Tests for equality and inequality with strings
var string1 = "sadoon";
var string2 = "orhaan";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true
//  Tests using the lower case function
var upperCase = "SADOON";
var lowerCase = "orhaan";
console.log(upperCase.toLowerCase() === lowerCase); //false
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var numerical1 = 20;
var numerical2 = 50;
console.log(numerical1 === numerical2); //false
console.log(numerical1 !== numerical2); //true
console.log(numerical1 > numerical2); //false
console.log(numerical1 < numerical2); //true
console.log(numerical1 >= numerical2); //false
console.log(numerical1 <= numerical2); //true
//  Tests using "and" and "or" operators
var a = 10;
var b = 30;
var c = 50;
console.log(a < b && b < c); //true
console.log(a > b || b < c); //false
// Test whether an item is in a array
var array1 = [1, 2, 3, 4, 5, 6];
var itemToFind = 3;
console.log(array1.indexOf(itemToFind) !== -1); //true
// • Test whether an item is not in a array
console.log(array1.indexOf(10) === -1); //false
