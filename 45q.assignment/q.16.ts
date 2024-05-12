let guestLists:string[] = ["fatima asif","sobia mozam","anaya shahzaad"];


console.log ("A big news! we found a bigger table for dinner");
 
// unshift (method use for enter in start in aayay)
 guestLists.unshift("sadoon");
 
// splice (method used for in middle in aaray)
 guestLists.splice(Math.floor(guestLists.length/2),0, "raid");



//  push(); (aapend)( this method is used for in last in aaray)
guestLists.push("oraahan")
console.log(guestLists);



// print message in aray list

 guestLists.forEach(guest => {
     console.log(`Dear ${guest}, you all to invited in my birthday party`)
 });
