import {Button} from "./myButton.js";
import {ColorButton} from "./myColorButton.js";
import {arrTexts, arrColors, arrButtons} from "./myArrays.js";

export function createButtons() {
    arrTexts.forEach((text, index) => {
        arrButtons.push(new Button(text, arrColors[index]));
    });
    arrButtons.push(new ColorButton("See More", "red", "white"));
}

export function showButtons() {
    arrButtons.forEach((button, index) => {
        setTimeout(() => button.show(), index * 1000);
    })
}