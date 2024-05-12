function Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log(" \n sandwich order!  ");
    for (var i = 0; i < items.length; i++) {
        console.log(" - ".concat(items[i]));
    }
}
console.log("\n enjoy your sandwich with yumy taste ");
Sandwich("chiken", "pataghobi", "cucumber");
Sandwich("beef", "capsicum", "chesse");
Sandwich("egg", "tomato", "salad pata", "mayonese");
