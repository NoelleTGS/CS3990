class Card {
    constructor(data, onCorrect, onIncorrect) {
        this.question = data.question;
        this.options = data.options;
        this.correctAnswer = data.correctAnswer;
        this.done = false;
        this.onCorrect = onCorrect;
        this.onIncorrect = onIncorrect;
    }

    render(container) {
        this.container = container;

        const question = document.createElement('h1');
        question.textContent = this.question;
        container.appendChild(question);

        const optionsContainer = document.createElement('div');

        this.options.forEach(option => {
            const optionDiv = document.createElement('div');

            const radio = document.createElement('input');
            const label = document.createElement('label');
            radio.type = 'radio';
            radio.name = this.question;
            radio.value = option;
            radio.id = option;
            label.htmlFor = option;
            label.textContent = option;

            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            optionsContainer.appendChild(optionDiv);
        });

        optionsContainer.style.width = '100%';
        optionsContainer.style.marginTop = '10px';
        optionsContainer.style.marginBottom = '10px';

        container.appendChild(optionsContainer);

        this.checkBtn = document.createElement('button');
        this.checkBtn.textContent = 'Check Answer';
        container.appendChild(this.checkBtn);

        this.checkBtn.onclick = (e) => {
            const selected = this.container.querySelector('input[type="radio"]:checked');
            if (selected) {
                const answer = selected.value;
                this.done = true;
                this.container.querySelectorAll('input[type="radio"]').forEach(radio => {
                    radio.disabled = true;
                });
                this.checkBtn.disabled = true;
                if (answer === this.correctAnswer) {
                    this.container.style.backgroundColor = 'green';
                    this.onCorrect();
                } else {
                    this.container.style.backgroundColor = 'red';
                    this.onIncorrect();
                }
            }
        }

        return container;
    }

    show(container) {
        this.render(container);
    }
}