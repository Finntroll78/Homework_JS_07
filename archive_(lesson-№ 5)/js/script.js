let classMenu = document.querySelector('.menu'),
    menuItem = document.createElement('li'), //создал элемент <li>
    bodyBg = document.getElementsByTagName('body'), //получил body
    title = document.getElementById('title'), //получил заголовок
    adv = document.getElementsByClassName('adv'), //получил рекламу
    column = document.getElementsByClassName('column'), //получил родителя рекламы
    answerAsk = document.getElementsByClassName('prompt'); //получил prompt

menuItem.innerHTML = 'Пятый пункт';
classMenu.appendChild(menuItem); //добавил элемент
menuItem.classList.add('menu-item'); //добавил класс элементу
bodyBg[0].style.backgroundImage = 'url(img/apple_true.jpg)'; //подключил бэкграунд
title.innerHTML = 'Мы продаем только подлинную технику Apple'; //поменял заголовок
column[1].removeChild(adv[0]); //удалил рекламу

ask = prompt('Как Вы относитесь к технике Apple?', '');

while (ask === '' || ask === null || !isNaN(ask) || ask.lenth > 20 || ask.length < 3) {
    ask = prompt('Как Вы относитесь к технике Apple?', '');
}

answerAsk[0].innerHTML = ask;
