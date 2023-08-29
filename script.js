let board = Array.from(document.querySelectorAll('.cell'));
let O = 'O';
let X = 'X';
let currentPlayer = X;

board.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
    e.target.textContent = currentPlayer;
    currentPlayer = currentPlayer === X ? O : X;
    checkGameStatus();
}

function checkGameStatus() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        if (
            board[combination[0]].textContent &&
            board[combination[0]].textContent === board[combination[1]].textContent &&
            board[combination[0]].textContent === board[combination[2]].textContent
        ) {
            setTimeout(() => {
                alert(`Player ${board[combination[0]].textContent} wins!`);
                location.reload();
            }, 100);
            return;
        }
    }

    if (Array.from(board).every(cell => cell.textContent)) {
        setTimeout(() => {
            alert('Draw!');
            location.reload();
        }, 100);
    }
}