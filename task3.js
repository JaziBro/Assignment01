//Name Cases: Store a person’s name in a variable,//
// and then print that person’s name in lowercase, uppercase, and titlecase.//
var name2 = "John";
var uppercasename2 = name2.toUpperCase();
console.log(uppercasename2);
var lowercasename2 = name2.toLowerCase();
console.log(lowercasename2);
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(toTitleCase(name2));
