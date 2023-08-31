//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.
var sandwich_toppings = ["Ketchup", "Kebab", "Chese", "Mustard"];
function sandwich_order(sandwich_toppings) {
    return sandwich_toppings;
}
console.log("Sandwich should contain", sandwich_toppings[0], ",", sandwich_toppings[1], "and", sandwich_toppings[2]);
var sandwich_toppings2 = ["Mustard", "Tomatoes", "Fish", "Mayonnaise"];
function sandwich_order2(sandwich_toppings) {
    return sandwich_toppings;
}
console.log("Sandwich should contain", sandwich_toppings2[0], ",", sandwich_toppings2[1], "and", sandwich_toppings2[2]);
var sandwich_toppings3 = ["Mayonnaise", "Lettuce", "Nuggets", "Ketchup"];
function sandwich_order3(sandwich_toppings) {
    return sandwich_toppings;
}
console.log("Sandwich should contain", sandwich_toppings3[0], ",", sandwich_toppings3[1], "and", sandwich_toppings3[2]);
