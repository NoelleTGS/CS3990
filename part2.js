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
let currentUser = "";

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
        currentUser = username;

        if (currentUser === "admin") {
            administrator();
        }
        if (currentUser === "designer") {
            designer();
        }
        if (currentUser === "tester") {
            tester();
        }
    } else {
        alert("I don't know you.");
    }
}

const administrator=()=>{
    const age = parseInt(prompt("Enter your age: "));
    const admissionYear = parseInt(prompt("Enter year of admission:"));
    alert("You will achieve your degree in " + (admissionYear + 4) + " at " + ((2026 - admissionYear) + age) + " years old.")
}

const designer=()=>{
    const portfolios = parseInt(prompt("Enter number of portfolios:"));
    const currentYear = new Date().getFullYear();
    const yearOfBirth = prompt("Enter your year of birth: ");
    const age = currentYear - yearOfBirth;

    switch (true) {
        case (age >= 14 && age <= 18):
            alert("You have received a 10% discount on an Adobe XD course.");
            break;
        case (age > 18):
            alert("You have received a 7% discount on an Adobe XD course.");
            break;
    }
}

const tester=()=>{
    const portfolios = parseInt(prompt("Enter number of portfolios:"));
    const currentYear = new Date().getFullYear();
    const yearOfBirth = prompt("Enter your year of birth: ");
    const age = currentYear - yearOfBirth;

    switch (true) {
        case (age >= 14 && age <= 18):
            alert("You have received a 10% discount on an QA Pro course.");
            break;
        case (age > 18):
            alert("You have received a 7% discount on an QA Pro course.");
            break;
    }
}