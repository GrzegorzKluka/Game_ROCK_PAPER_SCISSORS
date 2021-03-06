var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() {
    playerPick('ROCK')
});
pickPaper.addEventListener('click', function() {
    playerPick('PAPER')
});
pickScissors.addEventListener('click', function() {
    playerPick('SCISSORS')
});

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
    switch (gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            break;
        case 'ended':
            newGameBtn.innerText = 'PLAY AGAIN';
            playerPickElem.innerHTML = 'Player selection';
            computerPickElem.innerHTML = 'Computer selection';
            playerResultElem.innerHTML = 'Player Score';
            computerResultElem.innerHTML = 'Computer Score';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    player.name = prompt('Please enter your name', 'Your Name');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints();
    }

}

function playerPick(playerPick) {
    console.log(playerPick);
}

var x = Math.random();
Math.floor(Math.random() * 3)

function getComputerPick() {
    var possiblePicks = ['ROCK', 'PAPER', 'SCISSORS'];
    return possiblePicks[Math.floor(Math.random() * 3)];
}
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone';
    } else if (
        (computerPick == 'ROCK' && playerPick == 'SCISSORS') ||
        (computerPick == 'SCISSORS' && playerPick == 'PAPER') ||
        (computerPick == 'PAPER' && playerPick == 'ROCK')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = 'WIN!';
        playerResultElem.style.color = 'green';
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = 'WIN!';
        computerResultElem.style.color = 'red';
        computer.score++;
    } else {
        playerResultElem.innerHTML = computerResultElem.innerHTML = "DRAW!";
    }
    setGamePoints();
    winnerOfTheGame();

}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function winnerOfTheGame() {
    if (player.score == 10) {
        alert('The Winner is: ' + player.name.toUpperCase());
        isGameFinish();
    } else if (computer.score == 10) {
        alert('The Winner is:  COMPUTER');
        isGameFinish();
    }
}

function isGameFinish() {
    pickElem.style.display = 'none';
    gameState = 'ended';
    setGameElements();
}