let members: string[] = [`orhaan`,`raid`,`sadoon`, `fraal`];

// loop
// for each
// for of loop


console.log("\t\n loop method \t \n")
// loop method
for(let i = 0; i < members.length; i++){
    console.log(members[i]);
}
     
console.log("\t \n for each method \t \n")
    
  members.forEach(friend => {
      console.log(friend)
  });

     console.log(" \t \n for of loop method \t \n")
 for (const friendName of members){
    console.log(friendName);
 }
  
