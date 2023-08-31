//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'//
//PASSES//
var alien_colour = "green";
if (alien_colour = "green") {
    console.log("You earned 5 points");
}
//FAILS//
if (alien_colour != "green") {
    console.log("you didnt earned 5 points"); //no output
}
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain//
var alien_colour2 = "green";
if (alien_colour2 = "green") {
    console.log("You earned 5 points");
}
else {
    console.log("You earned 10 points");
}
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain//
var alien_colour3 = "green";
if (alien_colour3 = "green") {
    console.log("You earned 5 points");
    if (alien_colour3 = "red") {
        console.log("You earned 10 points");
        if (alien_colour3 = "yellow") {
            console.log("You earned 15 points");
        }
    }
}
