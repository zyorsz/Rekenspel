<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Game</title>
    <link rel="stylesheet" href="../assets/css/game.css">
</head>

<body>
    <div class="wrapper">

        <nav>
            <ul>
                <li class="nav-item active">
                    <a href="../menu/home.php">Menu</a>
                </li>
                <li>
                    <a href="scoreboard/scoreboard.php">Scoreboard</a>
                </li>
            </ul>
        </nav>

        <div class="container">
            <h2>Reken uit!</h2>
            <div class="question-container">
                <p id="question">5 - 1</p>
                <input type="number" id="answerInput" placeholder="Jouw antwoord">
                <button id="submitBtn">Doorgaan</button>
            </div>

            <div id="scoreContainer" style="display: none;">
                <p id="score"></p>
                <form id="scoreForm" action="../game/scoreboard/scoreboard.php" method="POST">
                    <input type="hidden" id="finalScore" name="finalScore">
                    <button type="submit">Bekijk Scorebord</button>
                </form>
            </div>
        </div>

        <div class="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <script src="../assets/js/game.js"></script>
</body>

</html>
