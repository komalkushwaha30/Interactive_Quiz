const totalQuestions = 5;
const userScore = 4; // Replace this with the actual score calculation

const scoreText = document.getElementById('score-text');
const needle = document.getElementById('needle');
const partyPopper = document.getElementById('party-popper');

function calculateAngle(score) {
    // Total angle for the semi-circle gauge is 180 degrees
    return (score / totalQuestions) * 180;
}

function showResult() {
    // Set score text
    scoreText.textContent = `Your Score: ${userScore}/${totalQuestions}`;

    // Animate needle based on the score
    const angle = calculateAngle(userScore);
    needle.style.transform = `rotate(${angle}deg)`;

    // Show party popper animation if the user scored more than 3
    if (userScore >= 3) {
        partyPopper.style.display = 'block';
    }
}

window.onload = showResult;
