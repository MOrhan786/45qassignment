
let guestLists:string[] = ["fatima asif","sobia mozam","anaya shahzaad"];
// print message
 console.log("unfortunately! the new dinner table  wont arrive so we can invite only two guest");

  
 guestLists.unshift("huzaifa","arham"); 
    // print message updated list
    console.log("updated list of guest:", guestLists);
  
    //  remove guest from the list
    while (guestLists.length > 2) {
        let removeGuest :string | undefined = guestLists.pop();
        if (removeGuest !== undefined) {
             console.log( `Sorry, ${removeGuest}, We cant invite you `);
    }
    }
    // Print a message to each of the two people still on your list, letting them know they’re still invited.
      guestLists.forEach(guest =>{
        console.log(`Dear ${guest},you both are invited for dinner`)
      })

    //   remove 2 names from the list 
      guestLists.splice(0, guestLists.length)
    
    //   print updatedempty list

    console.log("updated list of guest:", guestLists);