var buttons = document.getElementsByTagName('td');

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                if (this.id === '4') {
                    // переход на следующую страницу по указанному пути
                    window.location.href = 'tunnel.html';
                } else {
                    // добавление класса shake для анимации тряски экрана
                    document.body.classList.add('shake');
                    // удаление класса shake после 0.5 секунды
                    setTimeout(function() {
                        document.body.classList.remove('shake');
                    }, 500);
                }
            });
        }

var h1Element = document.querySelector('h1');
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var name = urlParams.get('name');

var h1Element = document.querySelector('h1');
h1Element.textContent = `${name} - имя настоящего героя!`;