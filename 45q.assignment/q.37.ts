
function make_shirt(size: string = `large`, text: string = `I love typescript`): void {
    console.log(`you have order a ${size}, shirt that says ${text}`)
}
make_shirt();
make_shirt(`medium`)


make_shirt(`small`, ` I need a big shirt `)