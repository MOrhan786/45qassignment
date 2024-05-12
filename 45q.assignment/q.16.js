// let guestLists: string[] = [`fatima`,`fraal`];
// // print the name who cant make dinner
// let unableAttend:string | undefined = guestLists.splice(2,1)[0];
// console.log(`${unableAttend}  not invited the dinner. `);
// // Push means new guest add
//  guestLists.push("anaya");
//  console.log(guestLists);
// // print a message for each  method
// guestLists.forEach(guest => {
//     console.log(`Dear ${guest}, you are invited the birthday party`);
// });
var guestLists = ["fatima asif", "sobia mozam", "anaya shahzaad"];
console.log("A big news! we found a bigger table for dinner");
// unshift (method use for enter in start in aayay)
guestLists.unshift("sadoon");
// splice (method used for in middle in aaray)
guestLists.splice(Math.floor(guestLists.length / 2), 0, "raid");
//  push(); (aapend)( this method is used for in last in aaray)
guestLists.push("oraahan");
console.log(guestLists);
// print message in aray list
guestLists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all to invited in my birthday party"));
});
