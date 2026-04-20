let colourBlocks = []
let fruits = []
let currentColor = ""

class ColourBlock {
    constructor(colour) {
        this.colour = colour;
    }

    render(container) {
        this.container = container;

        const colourBlock = document.createElement('div');
        colourBlock.classList.add('colourBlock');
        colourBlock.style.backgroundColor = this.colour;
        colourBlock.dataset.colour = this.colour;

        container.appendChild(colourBlock)
    }
}

class Fruit {
    constructor(name, colour, img, description) {
        this.name = name;
        this.colour = colour;
        this.img = img;
        this.description = description;
    }

    render(container) {
        this.container = container;

        const fruit = document.createElement('section');

        const name = document.createElement('h2');
        name.textContent = this.name;
        fruit.appendChild(name);

        const img = document.createElement('img');
        img.src = this.img;
        fruit.appendChild(img);

        const description = document.createElement('p');
        description.textContent = this.description;
        fruit.appendChild(description);

        container.appendChild(fruit);
    }
}

function getFruits() {
    for (let i = 0; i < fruits_data.length; i++) {
        if (!fruits.some(fruit => fruit.name === fruits_data[i].name)) {
            let fruit = new Fruit(fruits_data[i].name, fruits_data[i].colour, fruits_data[i].img, fruits_data[i].description);
            fruits.push(fruit);
        }
    }
}

function getColours() {
    for (let i = 0; i < fruits.length; i++) {
        if (!colourBlocks.some(colourBlock => colourBlock.colour === fruits[i].colour)) {
            let colourBlock = new ColourBlock(fruits[i].colour);
            colourBlocks.push(colourBlock);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getFruits()
    getColours()

    const colourPanel = $('#colourPanel');

    let coloursContainer = $('<div id="coloursContainer"></div>');
    colourBlocks.forEach(colourBlock => colourBlock.render(coloursContainer[0]));

    colourPanel.append(coloursContainer);

    $(".colourBlock").on("click", function () {
        if (currentColor === this.dataset.colour) {
            currentColor = "";
        } else {
            currentColor = this.dataset.colour;
        }
        updatePage();
    });
});

function updatePage() {
    $('#coloursContainer').children().each(function() {
        $(this).removeClass('shadow');
        if ($(this).data('colour') === currentColor) {
            $(this).addClass('shadow');
        }
    });

    const $fruitsContainer = $('#fruitDesc');
    $fruitsContainer.empty();
    fruits.forEach(fruit => {
        if (fruit.colour === currentColor) {
            fruit.render($fruitsContainer[0]);
        }
    });
}