window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    let hideTabContent = (a) => {//заменил на стр. ф-цию
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    let showTabContent = (b) => {//заменил на стр. ф-цию
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {//заменил на стр. ф-цию
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadLine = '2019-05-14';

    let getTimeRemaining = (endtime) => {//заменил на стр. ф-цию
        let t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            t = 0;
        };

        let seconds = Math.floor((t / 1000) % 60).toString(),
            minutes = Math.floor((t / 1000 / 60) % 60).toString(),
            hours = Math.floor((t / (1000 * 60 * 60))).toString();

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    let setClock = (id, endtime) => {//заменил на стр. ф-цию
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock () {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.hours.length < 2) {
                hours.textContent = '0' + t.hours;
            };

            if (t.minutes.length < 2) {
                minutes.textContent = '0' + t.minutes;
            };

            if (t.seconds.length < 2) {
                seconds.textContent = '0' + t.seconds;
            };

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);

    let more = document.querySelector('.more'),
        overLay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function() {
        overLay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {//заменил на стр. ф-цию
        overLay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    descriptionBtn.forEach(item => {
        item.addEventListener('click', function() {
            overLay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });

});