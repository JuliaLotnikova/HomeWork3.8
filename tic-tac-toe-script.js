var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var selectedOption = urlParams.get('option');

if (selectedOption === 'кости' || selectedOption === 'змей') {
    var message = "Вы выбрали идти по тоннелю " + selectedOption;
    document.getElementById('message').textContent = message;

    var currentPlayer = (selectedOption === 'змей') ? 'O' : 'X';

    var board = document.querySelector('.board');
    var cells = [];

    // Создание игрового поля
    for (var i = 0; i < 9; i++) {
        var cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', makeMove);
        board.appendChild(cell);
        cells.push(cell);
    }

    function makeMove() {
        if (!this.textContent) {
            this.textContent = currentPlayer;
            this.style.cursor = 'default';
            checkWinner();
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            if (currentPlayer === 'O') {
                makeOpponentMove();
            }
        }
    }

    function makeOpponentMove() {
        var emptyCells = getEmptyCells();
        var randomIndex = Math.floor(Math.random() * emptyCells.length);
        emptyCells[randomIndex].textContent = currentPlayer;
        emptyCells[randomIndex].style.cursor = 'default';
        checkWinner();
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }

    function getEmptyCells() {
        var emptyCells = [];
        for (var i = 0; i < cells.length; i++) {
            if (!cells[i].textContent) {
                emptyCells.push(cells[i]);
            }
        }
        return emptyCells;
    }

    function checkWinner() {
        var possibleWinningMoves = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // горизонтальные комбинации
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // вертикальные комбинации
            [0, 4, 8], [2, 4, 6] // диагональные комбинации
        ];

        for (var i = 0; i < possibleWinningMoves.length; i++) {
            var [a, b, c] = possibleWinningMoves[i];
            if (
                cells[a].textContent &&
                cells[a].textContent === cells[b].textContent &&
                cells[a].textContent === cells[c].textContent
            ) {
                alert('Победитель: ' + currentPlayer);
                resetGame();
                return;
            }
        }

        if (isBoardFull()) {
            alert('Ничья!');
            resetGame();
        }
    }

    function resetGame() {
        for (var i = 0; i < cells.length; i++) {
            cells[i].textContent = '';
            cells[i].style.cursor = 'pointer';
        }
        currentPlayer = (selectedOption === 'змей') ? 'O' : 'X';
    }

    function isBoardFull() {
        for (var i = 0; i < cells.length; i++) {
            if (!cells[i].textContent) {
                return false;
            }
        }
        return true;
    }

    // Делаем ход противника после первого хода игрока
    if (currentPlayer === 'O') {
        makeOpponentMove();
    }
}
else {
    var errorMessage = "Ошибка: Как ты здесь оказался? Телепортируйся назад и выбери тоннель!";
    document.getElementById('error').textContent = errorMessage;
}