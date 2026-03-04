"use strict";

let users = {
    "admin": {
        allowedAttempts: 2,
        password: ""
    },
    "designer": {
        allowedAttempts: 3,
        password: "111"
    },
    "tester": {
        allowedAttempts: 3,
        password: "222"
    }
}

let adminPass = Math.round((Math.random()*600000)).toString().padStart(6, '0');
console.log("Admin password: " + adminPass);
users["admin"].password = adminPass;

// step 1
const logIn=()=>{
    let username;
    username = prompt("Enter your username: ").toLowerCase();
    if (username in users) {
        let password = '';
        let attempts = 0;
        while (attempts < users[username].allowedAttempts && password !== users[username].password) {
            password = prompt("Enter your password: ");
            if (password !== users[username].password) {
                alert("Incorrect password.");
                attempts++;
            }
            if (attempts === users[username].allowedAttempts) {
                alert("Access denied. Too many incorrect password attempts.");
            }
        }
    } else {
        alert("I don't know you.");
    }
}

const administrator=()=>{

}