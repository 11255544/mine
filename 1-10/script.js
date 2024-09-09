let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let userGuess = document.getElementById('guess').value;
    let result = document.getElementById('result');

    if (userGuess == randomNumber) {
        result.textContent = "Gratulujeme! Uhodli jste správné číslo.";
        result.style.color = 'green';
    } else if (userGuess > randomNumber) {
        result.textContent = "Příliš vysoké! Zkuste to znovu.";
        result.style.color = 'red';
    } else {
        result.textContent = "Příliš nízké! Zkuste to znovu.";
        result.style.color = 'red';
    }
}
