let guestlist: string[] = [`fatima`,`fraal`,`sobia`,];

// you use any mothed 


// map() method
 let invitation: string  []= guestlist.map(guest =>  `Dear ${guest}, you are invited to dinner`);
       console.log(invitation)




// ForEach method
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, your are invited to dinner.`);
});

 invitation.forEach(invitations => {
       console.log(invitations);
 });


