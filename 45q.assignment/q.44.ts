
function Sandwich(...items: string[]) : void {
       console.log(" \n sandwich order!  ");
      for(let i=0; i <items.length;  i++) {
        console.log(` - ${items[i]}`)
      }
       
}
console.log("\n enjoy your sandwich with yumy taste ")

Sandwich("chiken", "pataghobi", "cucumber")
Sandwich("beef", "capsicum", "chesse")
Sandwich("egg", "tomato", "salad pata", "mayonese")


