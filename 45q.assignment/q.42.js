function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = " the great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
var magicians2 = ["ali", "saad", "muzami"];
make_great(magicians2);
show_magicians(magicians2);
