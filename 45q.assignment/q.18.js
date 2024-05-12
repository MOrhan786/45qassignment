var favouritePlaces = ["sadui arabia", "tukey", "paris", "china", "new york"];
// print in original order
console.log("original order:", favouritePlaces);
//  Print your array in alphabetical order without modifying the actual list.
console.log(" Alphabetical order:", favouritePlaces.slice().sort());
//  array is still in its original order by printing it.
console.log("original order:", favouritePlaces);
// print array in reverse alphabetical order without changing the order of the original list.
console.log("reverse order:", favouritePlaces.slice().sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("original order:", favouritePlaces);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("reverse order change");
favouritePlaces.reverse();
console.log(favouritePlaces);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("original order:", favouritePlaces.sort());
console.log(favouritePlaces);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("reverse alphabetical order changed:", favouritePlaces.sort().reverse());
console.log(favouritePlaces);
