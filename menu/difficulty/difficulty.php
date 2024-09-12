<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../assets/css/difficulty.css">
    <title>Moeilijkheid</title>
</head>

<body>
    <div class="wrapper">

        <nav>
            <ul>
                <li class="nav-item active">
                    <a href="../home.php">Menu</a>
                </li>
                <li>
                    <a href="../game/scoreboard/scoreboard.php">Scoreboard</a>
                </li>
            </ul>
        </nav>

        <div class="container">
            <h2>Kies de moeilijkheid voor <span id="categoryName"></span></h2>
            <button class="difficultyBtn" data-difficulty="easy"><span>Makkelijk</span></button>
            <button class="difficultyBtn" data-difficulty="medium"><span>Gemiddeld</span></button>
            <button class="difficultyBtn" data-difficulty="hard"><span>Moeilijk</span></button>
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
    <script src="../../assets/js/difficulty.js"></script>
</body>

</html>
