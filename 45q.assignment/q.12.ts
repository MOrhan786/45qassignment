let members: string[] = [`orhaan`, `raid`, `sadoon`, `fraal`];

// loop
// for each
// for of loop




console.log("\t\n loop method \t \n");
// loop method
for (let i = 0; i < members.length; i++) {
  console.log(`hello, ${members[i]}! how are you today`);
}



console.log("\t \n for each method \t \n");

members.forEach((friend) => {
  console.log(`Hi, ${friend}! i am fine`);
});



console.log(" \t \n for of loop method \t \n");
for (const friendName of members) {
  console.log(`Dear, ${friendName}! what are u doing`);
}
