var guestlist = ["fatima", "fraal", "sobia",];
// you use any mothed 
// map() method
var invitation = guestlist.map(function (guest) { return "Dear ".concat(guest, ", you are invited to dinner"); });
console.log(invitation);
// ForEach method
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", your are invited to dinner."));
});
invitation.forEach(function (invitations) {
    console.log(invitations);
});
