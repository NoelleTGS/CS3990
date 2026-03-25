export class Button {
    constructor(btnText, btnBgColor) {
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        this.btnTitle = `${btnText} is shown on the ${btnBgColor} background`
    }

    show() {
        document.write(`<button style="background-color: ${this.btnBgColor}" title="${this.btnTitle}">${this.btnText}</button>`);
    }
}