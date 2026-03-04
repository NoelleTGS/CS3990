"use strict";

// login
function logIn() {
    let adminNames = ['a', 'admin'];
    let studentNames = ['s', 'student'];
    const parentElement = document.getElementsByTagName('body')[0];

    let username = prompt("Enter your username: ").toLowerCase();
    if (adminNames.includes(username)) {
        const hiButton = document.createElement('button');
        hiButton.innerText = "Say Hi";
        hiButton.addEventListener('click', sayHi)

        const animalButton = document.createElement('button');
        animalButton.innerText = "Favourite Animal";
        animalButton.addEventListener('click', favouriteAnimal)

        parentElement.append(hiButton);
        parentElement.append(animalButton);
        document.getElementById('login-btn').remove();
    } else if (studentNames.includes(username)) {
        const hiButton = document.createElement('button');
        hiButton.innerText = "Say Hi";
        hiButton.addEventListener('click', sayHi)

        parentElement.append(hiButton);
        document.getElementById('login-btn').remove();
    } else {
        alert("I don't know you.");
    }
}

// task 1
function sayHi() {
    let lang = prompt("Enter your language (abbreviation): ").toLowerCase();
    let greeting;
    switch (lang) {
        case "en":
            greeting = "Hello!";
            break;
        case "fr":
            greeting = "Bonjour!";
            break;
        case "de":
            greeting = "Hallo!";
            break;
        case "es":
            greeting = "Hola!";
            break;
        default:
            greeting = "Sorry, I don't speak your language.";
    }
    alert(greeting)
}

// task 2
function favouriteAnimal() {
    const currentYear = new Date().getFullYear();
    let yearOfBirth = prompt("Enter your year of birth: ");
    let age = currentYear - yearOfBirth;
    switch (true) {
        case age < 18:
            alert("Content is not available due to age restrictions");
            break;
        case age >= 18 && age <= 55:
            alert("Content is available");
            break;
        case age > 55:
            document.write("Much like mathematics, programming is a logico-deductive system. And I think the important point" +
                "that I am making is that in a purely logico-deductive system there is no philosophy - everything is known. " +
                "However, insofar as there is art inmathematics, there is philosophy in mathematics. Insofar as there is art " +
                "in programming, there is philosophy in programming.");
    }
}