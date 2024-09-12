const category = localStorage.getItem('selectedCategory');
const difficulty = localStorage.getItem('selectedDifficulty');

let currentQuestion = 0;
let score = 0;
let totalQuestions = 5;
let questions = [];

function getRandomNumber() {
    switch (difficulty) {
        case 'easy':
            return Math.floor(Math.random() * 10) + 1;
        case 'medium':
            return Math.floor(Math.random() * 50) + 1;
        case 'hard':
            return Math.floor(Math.random() * 100) + 1;
    }
}

function generateQuestions() {
    for (let i = 0; i < totalQuestions; i++) {
        let num1 = getRandomNumber();
        let num2 = getRandomNumber();
        let question, answer;

        switch (category) {
            case 'Optellen':
                question = `${num1} + ${num2}`;
                answer = num1 + num2;
                break;
            case 'Aftrekken':
                question = `${num1} - ${num2}`;
                answer = num1 - num2;
                break;
            case 'Vermenigvuldigen':
                question = `${num1} x ${num2}`;
                answer = num1 * num2;
                break;
            case 'Delen':
                question = `${num1} ÷ ${num2}`;
                answer = Math.round((num1 / num2) * 100) / 100;
                break;
            case 'Alles gemixt':
                const operations = ['+', '-', 'x', '÷'];
                const operation = operations[Math.floor(Math.random() * operations.length)];
                switch (operation) {
                    case '+':
                        question = `${num1} + ${num2}`;
                        answer = num1 + num2;
                        break;
                    case '-':
                        question = `${num1} - ${num2}`;
                        answer = num1 - num2;
                        break;
                    case 'x':
                        question = `${num1} x ${num2}`;
                        answer = num1 * num2;
                        break;
                    case '÷':
                        question = `${num1} ÷ ${num2}`;
                        answer = Math.round((num1 / num2) * 100) / 100;
                        break;
                   
                }
                break;
        }

        questions.push({ question, answer });
    }
}

function loadQuestion() {
    if (currentQuestion < totalQuestions) {
        document.getElementById("question").textContent = questions[currentQuestion].question;
    } else {
        endGame();
    }
}

document.getElementById("submitBtn").addEventListener("click", function () {
    const userAnswer = parseFloat(document.getElementById("answerInput").value);
    const correctAnswer = questions[currentQuestion].answer;

    if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert(`Fout! Het juiste antwoord is: ${correctAnswer}`);
    }

    currentQuestion++;
    document.getElementById("answerInput").value = "";
    loadQuestion();
});

function endGame() {
    document.querySelector(".question-container").style.display = "none";
    document.getElementById("scoreContainer").style.display = "block";
    document.getElementById("score").textContent = `Jouw score: ${score} uit ${totalQuestions}`;

    document.getElementById("finalScore").value = score;
}

generateQuestions();
loadQuestion();
