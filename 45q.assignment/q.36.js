// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
//  that should be printed on the shirt. 
//  The function should print a sentence summarizing the size of the
//  shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log("/n You order a ".concat(size, " shirt that says ").concat(text));
}
make_shirt("large", "\"I love typescript\"");
make_shirt("medium", "\"I need a big shirt\"");
