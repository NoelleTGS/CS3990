function timer(duration, setTimeDisplay, onEnd) {
    let remaining = duration;
    setTimeDisplay(remaining);

    const id = setInterval(() => {
        remaining -= 1;
        setTimeDisplay(remaining);

        if (remaining === 0) {
            clearInterval(id);
            onEnd();
        }
    }, 1000);

    return id;
}

function arrShuffle(arr1, arr2) {
    const combine = [...arr1, ...arr2]

    for (let i = combine.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combine[i], combine[j]] = [combine[j], combine[i]];
    }
    return combine;
}