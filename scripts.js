
let currentTurn = 'X';
let winner = null;

function setMessage(msg) {
    document.getElementById('message').innerText = msg;
}

function startGame() {
    setMessage('start game')
}

function switchTurn() {
    if(checkWinner(currentTurn)) {
        setMessage(`${currentTurn} win!`);
        winner = currentTurn;
        return;      
    }
    if (currentTurn === 'X') {
        currentTurn = 'O'
    } else {
        currentTurn = 'X';
    }
    setMessage(`${currentTurn} gets turn`);
}

function checkWinner(move) {
    let result = false;
    if (checkRow(1, 2, 3, move)
        || checkRow(4, 5, 6, move)
        || checkRow(7, 8, 9, move)
        || checkRow(1, 4, 7, move)
        || checkRow(2, 5, 8, move)
        || checkRow(3, 6, 9, move)
        || checkRow(1, 5, 9, move)
        || checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    let result = false;
    if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
        return true;
    }
}

function getBox(number) {
    return document.getElementById('n' + number).innerText;
}

function clearGmae(index) {
     document.getElementById('n' + index).innerText = '';    
}

function newGame() {
    for (let index = 1; index <= 9; index++) {
        clearGmae(index);        
    }
}

function nextMove(item) {
    if (winner != null) {
        setMessage(winner + ' won the game!')        
    } else if (item.innerText == '') {
        item.innerText = currentTurn;
        switchTurn();
    } else {
        setMessage('this square is already used!')
    }
}

addEventListener('load', startGame);
