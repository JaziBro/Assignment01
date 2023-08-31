//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array
var Magicians = ["Criss Angel", "David Copperfield", "Harry Houdini"];
function show_magicinas() {
    return Magicians;
}
console.log(Magicians);
//Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//Call show_magicians() to see that the list has actually been modified.
function make_great(name) {
    if (name === void 0) { name = "Great"; }
    return name + Magicians;
}
console.log("Great", Magicians[0], "Great", Magicians[1], "Great", Magicians[2]);