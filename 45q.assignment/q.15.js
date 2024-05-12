var guestLists = ["fatima", "fraal", "sobia",];
// print the name who cant make dinner
var unableAttend = guestLists.splice(1, 1)[0];
console.log("".concat(unableAttend, "  not invited the dinner. "));
// Push
guestLists.push("anaya");
console.log(guestLists);
// print a message for each
guestLists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited the birthday party"));
});
