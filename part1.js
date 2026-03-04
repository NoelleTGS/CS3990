"use strict";

// login
function logIn() {
    let adminNames = ['a', 'admin'];
    let studentNames = ['s', 'student'];
    const parentElement = document.getElementsByTagName('body')[0];

    let username = prompt("Enter your username: ").toLowerCase();
    if (adminNames.includes(username) || studentNames.includes(username)) {
        document.getElementById('login-btn').remove();

        const hiButton = document.createElement('button');
        hiButton.innerText = "Say Hi";
        hiButton.addEventListener('click', sayHi)
        parentElement.append(hiButton);

        if (adminNames.includes(username)) {
            const animalButton = document.createElement('button');
            animalButton.innerText = "Favourite Animal";
            animalButton.addEventListener('click', favouriteAnimal)
            parentElement.append(animalButton);
        }

        document.getElementById('login-btn').remove();
    } else if (studentNames.includes(username)) {
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
    if (age > 18) {
        const image = document.createElement('img');
        image.src = "img/image.jpg";
        document.body.append(image);
    }
    switch (true) {
        case age < 18:
            alert("Content is not available due to age restrictions");
            break;
        case age >= 18 && age <= 55:
            let animal = prompt("Enter your favourite animal: ").toLowerCase();
            const animal_image = document.createElement('img');
            switch (animal) {
                case "cat":
                    animal_image.src = "https://raw.githubusercontent.com/googlefonts/noto-emoji/8998f5dd683424a73e2314a8c1f1e359c19e8742/svg/emoji_u1f431.svg";
                    break;
                case "dog":
                    animal_image.src = "https://raw.githubusercontent.com/googlefonts/noto-emoji/8998f5dd683424a73e2314a8c1f1e359c19e8742/svg/emoji_u1f436.svg";
                    break;
                case "frog":
                    animal_image.src = "https://raw.githubusercontent.com/googlefonts/noto-emoji/8998f5dd683424a73e2314a8c1f1e359c19e8742/svg/emoji_u1f438.svg";
                    break;
                case "mouse":
                    animal_image.src = "https://raw.githubusercontent.com/googlefonts/noto-emoji/8998f5dd683424a73e2314a8c1f1e359c19e8742/svg/emoji_u1f401.svg";
                    break;
            }
            document.body.append(animal_image);
            break;
        case age > 55:
            const text = document.createElement('p');
            text.innerText = "Much like mathematics, programming is a logico-deductive system. And I think the important point " +
                "that I am making is that in a purely logico-deductive system there is no philosophy - everything is known. " +
                "However, insofar as there is art inmathematics, there is philosophy in mathematics. Insofar as there is art " +
                "in programming, there is philosophy in programming.";
            document.body.append(text);
    }
}