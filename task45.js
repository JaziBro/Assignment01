//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
//Print the Object that’s returned to make sure all the information was stored correctly.
function civic(manufacturer, modelname, colour, year) {
    return { manufacturer: manufacturer, modelname: modelname, colour: colour, year: year };
}
console.log("Honda,", "Civic Type R,", "Blue,", "2023");
