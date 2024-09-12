const selectedCategory = localStorage.getItem('selectedCategory');
document.getElementById('categoryName').textContent = selectedCategory;

function startGame(difficulty) {
    console.log('Starting game with difficulty:', difficulty);
    localStorage.setItem('selectedDifficulty', difficulty);
    window.location.href = '../../game/game.php';
}

document.querySelectorAll('.difficultyBtn').forEach(button => {
    button.addEventListener('click', () => {
        const difficulty = button.getAttribute('data-difficulty');
        console.log('Button clicked with difficulty:', difficulty);
        startGame(difficulty);
    });
});
