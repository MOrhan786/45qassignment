function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = " the great " + magicians[i];
  }
}
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}
const magicians2: string[] = ["ali", "saad", "muzami"];
make_great(magicians2);
show_magicians(magicians2);
