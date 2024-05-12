var members = ["orhaan", "raid", "sadoon", "fraal"];
// loop
// for each
// for of loop
console.log("\t\n loop method \t \n");
// loop method
for (var i = 0; i < members.length; i++) {
    console.log(members[i]);
}
console.log("\t \n for each method \t \n");
members.forEach(function (friend) {
    console.log(friend);
});
console.log(" \t \n for of loop method \t \n");
for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
    var friendName = members_1[_i];
    console.log(friendName);
}
