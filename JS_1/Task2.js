"use strict"

console.log("Who's there?");

let login, password;
let a = 'Admin', b = 'TheMaster';
if (login == a) {
	console.log("Password?");
	if (password == b) {
		console.log("Welcome!");
	} else if (password == null) {
		console.log("Canceled");
	} else {
		console.log("Wrong Password");
	}
} else if (login == null) {
	console.log("Canceled")
} else {
	console.log("I don't know you");
}