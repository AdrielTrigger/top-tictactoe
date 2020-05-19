const game = (() => {
    let board = [[1,2,3],[4,5,6],[7,8,9]];
    let scores = { player1: 0, player2: 0 };
    let player1score = document.querySelector('.player1 p');
    let player2score = document.querySelector('.player2 p');
    let newBoard = document.querySelectorAll('.space');
    let turns = 0;

    player1score.textContent = scores.player1;
    player2score.textContent = scores.player2;

    const markBoard = (player,e) => {
        let space = getEventTarget(e);

        if (space.textContent == '') {
            switch (space.id) {
                case 'one':
                    space.textContent = player.putMarker();
                    board[0][0] = player.putMarker();
                    break;
                case 'two':
                    space.textContent = player.putMarker();
                    board[0][1] = player.putMarker();
                    break;
                case 'three':
                    space.textContent = player.putMarker();
                    board[0][2] = player.putMarker();
                    break;
                case 'four':
                    space.textContent = player.putMarker();
                    board[1][0] = player.putMarker();
                    break;
                case 'five':
                    space.textContent = player.putMarker();
                    board[1][1] = player.putMarker();
                    break;
                case 'six':
                    space.textContent = player.putMarker();
                    board[1][2] = player.putMarker();
                    break;
                case 'seven':
                    space.textContent = player.putMarker();
                    board[2][0] = player.putMarker();
                    break;
                case 'eight':
                    space.textContent = player.putMarker();
                    board[2][1] = player.putMarker();
                    break;
                case 'nine':
                    space.textContent = player.putMarker();
                    board[2][2] = player.putMarker();
                    break;
            }
            turns++;
            console.log(turns);
        }
        winCheck();
    }

    const winCheck = () => {
        let conditions =    [[board[0][0],board[0][1],board[0][2]],
                            [board[1][0],board[1][1],board[1][2]],
                            [board[2][0],board[2][1],board[2][2]],
                            [board[0][0],board[1][0],board[2][0]],
                            [board[0][1],board[1][1],board[2][1]],
                            [board[0][2],board[1][2],board[2][2]],
                            [board[0][0],board[1][1],board[2][2]],
                            [board[0][2],board[1][1],board[2][0]]];
        
        let a, b, c, win;

        for (con = 0; con < 8; con++) { // con stands for condition
            win = false;
            a = conditions[con][0];
            b = conditions[con][1];
            c = conditions[con][2];
            if (a == b && b == c) {
                if (a == 'X') {
                    scores.player1++;
                    player1score.textContent = scores.player1;
                    alert ('X wins');
                    win = true;
                    boardClear();
                    turns = 0;
                    break;
                } else if (a == 'O') {
                    scores.player2++;
                    player2score.textContent = scores.player2;
                    alert ('O wins');
                    win = true;
                    boardClear();
                    turns = 0;
                    break;
                }
            } 
        }
        if (turns == 9 && win == false) {
            alert('It\'s a tie');
            boardClear();
            turns = 0;
        }
    }

    const boardClear = () => {
        for (i = 0; i < newBoard.length; i++) {
            newBoard[i].textContent = '';
        }
        board = [[1,2,3],[4,5,6],[7,8,9]];
    }
        

    return { board, markBoard, winCheck, boardClear }
})();

const player = (marker) => {
    const putMarker = () => {
        return marker;
    }

    return { putMarker }
}

let player1 = player('X');
let player2 = player('O');
let priority = player1;

let htmlBoard = document.querySelector('.board');

function getEventTarget(e) {
    e = e;
    return e.target;
}

let player1colors = document.querySelector('.player1');
let player2colors = document.querySelector('.player2');

function showPriority(priority) {
    if (priority == player1) {
        player1colors.style.setProperty('background-color', 'rgb(138, 20, 20)');
        player1colors.style.setProperty('color', 'white');
        player2colors.style.setProperty('background-color', 'white');
        player2colors.style.setProperty('color', 'rgb(23, 23, 163)');
    } else {
        player1colors.style.setProperty('background-color', 'white');
        player1colors.style.setProperty('color', 'rgb(138, 20, 20)');
        player2colors.style.setProperty('background-color', 'rgb(23, 23, 163)');
        player2colors.style.setProperty('color', 'white');
    }
}

showPriority(priority);

htmlBoard.addEventListener('click', (e) => { 
    game.markBoard(priority,e);
    let mark = getEventTarget(e).textContent;
    if (priority == player1 && mark == player1.putMarker()) {
        priority = player2;
    } else if (mark == player2.putMarker()) {
        priority = player1;
    }
    showPriority(priority);
});