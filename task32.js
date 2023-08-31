//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username/
var current_users = ["Tim", "Farhan", "Sarah", "Rayan", "Arshad"];
var new_users = ["Tim", "Farhan", "Arsalan", "James", "Arthur"];
for (var i = 0; i < new_users.length; i++) {
    if (new_users.indexOf(current_users[i])) {
        console.log("This username", new_users[i], "is already taken.", "Please insert new username");
    }
    else {
        console.log("This username", new_users[i], "is avalaible");
    }
}
