var nameInput = document.getElementById("name");
var clearButton = document.getElementById("clear-button");
var startButton = document.getElementById("start-button");
var errorMessage = document.querySelector(".error-message");

nameInput.addEventListener("input", function() {
    var username = nameInput.value.trim();
    if (username !== "") {
        startButton.disabled = false; // Включаем кнопку "Начать"
    } else {
        startButton.disabled = true; // Задизейбливаем кнопку "Начать"
    }

    if (username.length <= 10) {
        errorMessage.textContent = ""; // Скрываем сообщение об ошибке
    }
});

clearButton.addEventListener("click", function() {
    nameInput.value = ""; // Очищаем поле ввода
    startButton.disabled = true; // Задизейбливаем кнопку "Начать"
    errorMessage.textContent = ""; // Скрываем сообщение об ошибке
});

document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = nameInput.value.trim();

    if (username.length > 10) {
        errorMessage.textContent = "Имя не должно превышать 10 символов";
    } else if (username.length <= 10 && username !== "") {
        window.location.href = "code.html?name=" + encodeURIComponent(username);
    }
});