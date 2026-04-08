const startBtn = document.getElementById('start-game');
const gameContainer = document.getElementById('game-container');
const board = document.getElementById('board');
let score = 0;
let timerId;
let gameover = false;

startBtn.onclick = () => {
    startBtn.disabled = true;
    gameContainer.style.display = 'flex';

    const allCards = arrShuffle(questions, assets);

    timerId = timer(allCards.length * 2, (time) => {
            document.getElementById('timer').textContent = time;
        },
        () => endGame())

    allCards.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        const inner = document.createElement('div');
        inner.classList.add('card-inner');
        const front = document.createElement('div');
        front.classList.add('card-front');
        const back = document.createElement('div');
        back.classList.add('card-back');

        if (item.question) {
            let new_card = new Card(item,
                () => addStar(),
                () => onIncorrect()
            );
            new_card.show(back);
        } else {
            const value = document.createElement('h1');
            value.textContent = item.value;
            value.style.fontSize = '100px';
            back.appendChild(value);
        }

        card.onclick = () => {
            if (card.classList.contains('done')) {
                if (!gameover) showMessage("This card is done!");
                return;
            }
            if (card.classList.contains('flipped')) return;
            card.classList.add('flipped');
            card.classList.add('done');

            if (!item.question) {
                showMessage(item.description)
                if (item.value === '💎') {
                    back.style.backgroundColor = 'green';
                    addStar();
                } else if (item.value === '🐻') {
                    back.style.backgroundColor = 'red';
                    removeStar();
                } else if (item.value === '❌') {
                    back.style.backgroundColor = 'red';
                    board.querySelectorAll('input[type="radio"]').forEach(radio => {
                        radio.disabled = true;
                    });
                    board.querySelectorAll('button').forEach(btn => {
                        btn.disabled = true;
                    });
                    board.querySelectorAll('.card').forEach(card => {
                        card.classList.add('done');
                    })

                    showMessage("Game over, you can only watch your timer go down!");
                }
            }
        }

        card.appendChild(inner);
        inner.appendChild(front);
        inner.appendChild(back);
        board.appendChild(card);
    });
}

function showMessage(message) {
    const messageContainer = $('#message');
    messageContainer.text(message);
    messageContainer.fadeIn(50).delay(2000).fadeOut(500);
}

function onIncorrect() {
    showMessage("Incorrect answer!");
}

function updateStars() {
    const stars = document.getElementById('stars');
    stars.innerHTML = '';
    for (let i = 0; i < score; i++) {
        const star = document.createElement('span');
        star.innerHTML = '★';
        stars.appendChild(star);
    }
}

function addStar() {
    score++;
    updateStars();
    showMessage("You got a star!");
}

function removeStar() {
    score--;
    updateStars();
}

function endGame() {
    gameover = true;
    clearInterval(timerId);
    document.getElementById('timer').textContent = 0;

    board.querySelectorAll('.card').forEach(card => {
        card.style.visibility = 'hidden';
    });

    showMessage("Game Over!");
}