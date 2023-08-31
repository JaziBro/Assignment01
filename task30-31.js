//Hello Admin: Make an array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user://
var usernames = ["Jack", "John", "Sarfaraz", "Amanda", "Admin"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'Admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty//
if (usernames = []) {
    console.log("We need to find some users");
}
