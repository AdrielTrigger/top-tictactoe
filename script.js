const game = (() => {
    let board = [[1,2,3],[4,5,6],[7,8,9]];
    let scores = { player1: 0, player2: 0 };
    let player1score = document.querySelector('.player1 p');
    let player2score = document.querySelector('.player2 p');
    let newBoard = document.querySelectorAll('.space');

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
        }
        winCheck();
    }

    const winCheck = () => {
        console.log(board);
        if (board[0][0] == board[0][1] && board[0][1] == board[0][2]) {
            if (board[0][0] == 'X') {
                alert('X wins');
                scores.player1 += 1;
            } else if (board[0][0] == 'O') {
                alert('O wins');
                scores.player2 += 1;
            }
            boardClear();
        } else if (board[1][0] == board[1][1] && board[1][1] == board[1][2]) {
            if (board[1][0] == 'X') {
                alert('X wins');
                scores.player1 += 1;
            } else if (board[1][0] == 'O') {
                alert('O wins');
                scores.player2 += 1;
            }
            boardClear();
        } else if (board[2][0] == board[2][1] && board[2][1] == board[2][2]) {
            if (board[2][0] == 'X') {
                alert('X wins');
                scores.player1 += 1;
            } else if (board[2][0] == 'O') {
                alert('O wins');
                scores.player2 += 1;
            }
            boardClear();
        } else if (board[0][0] == board[1][0] && board[1][0] == board[2][0]) {
            if (board[0][0] == 'X') {
                alert('X wins');
                scores.player1 += 1;
            } else if (board[0][0] == 'O') {
                alert('O wins');
                scores.player2 += 1;
            }
            boardClear();
        } else if (board[0][1] == board[1][1] && board[1][1] == board[2][1]) {
            if (board[0][1] == 'X') {
                alert('X wins');
                scores.player1 += 1;
            } else if (board[0][1] == 'O') {
                alert('O wins');
                scores.player2 += 1;
            }
            boardClear();
        } else if (board[0][2] == board[1][2] && board[1][2] == board[2][2]) {
            if (board[0][2] == 'X') {
                alert('X wins');
                scores.player1 += 1;
            } else if (board[0][2] == 'O') {
                alert('O wins');
                scores.player2 += 1;
            }
            boardClear();
        } else if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
            if (board[0][0] == 'X') {
                alert('X wins');
                scores.player1 += 1;
            } else if (board[0][0] == 'O') {
                alert('O wins');
                scores.player2 += 1;
            }
            boardClear();
        } else if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {                if (board[0][2] == 'X') {
                alert('X wins');
                scores.player1 += 1;
            } else if (board[0][2] == 'O') {
                alert('O wins');
                scores.player2 += 1;
            }
            boardClear();
        }
    }

    const boardClear = () => {
        for (i = 0; i < newBoard.length; i++) {
            newBoard[i].textContent = '';
        }
        board = [[1,2,3],[4,5,6],[7,8,9]];
        player1score.textContent = scores.player1;
        player2score.textContent = scores.player2;
    }
        

    return { board, markBoard, winCheck }
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

htmlBoard.addEventListener('click', (e) => { 
    game.markBoard(priority,e);
    let mark = getEventTarget(e).textContent;
    if (priority == player1 && mark == player1.putMarker()) {
        priority = player2;
    } else if (mark == player2.putMarker()) {
        priority = player1;
    }
});