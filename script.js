// script.js
let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const guess = document.getElementById('guess').value;
    const feedback = document.getElementById('feedback');

    if (guess == secretNumber) {
        feedback.textContent = 'Congratulations! You got it right!';
        feedback.style.color = 'green';
        // Reset the game
        setTimeout(function() {
            secretNumber = Math.floor(Math.random() * 10) + 1;
            feedback.textContent = '';
            document.getElementById('guess').value = '';
        }, 3000);
    } else if (guess < secretNumber) {
        feedback.textContent = 'Too low. Try again!';
        feedback.style.color = 'red';
    } else if (guess > secretNumber) {
        feedback.textContent = 'Too high. Try again!';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Please enter a valid number.';
        feedback.style.color = 'orange';
    }
}
