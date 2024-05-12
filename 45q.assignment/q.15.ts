let guestLists: string[] = [`fatima`,`fraal`,`sobia`,];


// print the name who cant make dinner
let unableAttend:string | undefined = guestLists.splice(1,1)[0];
  
console.log(`${unableAttend}  not invited the dinner. `);

// Push

 guestLists.push("anaya");

// console.log(guestLists);

// print a message for each
guestLists.forEach(guest => {
    console.log(`Dear ${guest}, you are invited the birthday party`);

});

