let startBtn = document.getElementById('start'), //статр
    budgetValue = document.querySelector('.budget-value'), //доход
    daybudgetValue = document.querySelector('.daybudget-value'), //Бюджет на 1 день
    levelValue = document.querySelector('.level-value'), //Уровень дохода
    expensesValue = document.querySelector('.expenses-value'), //Обязательные расходы
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'), //Возможные траты
    incomValue = document.querySelector('.income-value'), //Дополнительный доход
    monthsavingsValue = document.querySelector('.monthsavings-value'), //Накопления за 1 месяц
    yearsavingsValue = document.querySelector('.yearsavings-value'), //Накопления за 1 год

    expensesItem = document.getElementsByClassName('expenses-item'), //обязательные расходы

    //кнопки:
    expensesItemBtn = document.getElementsByTagName('button')[0], //утвердить обязательные расходы
    optionalExpensesBtn = document.getElementsByTagName('button')[1], //утвердить необязательные расходы
    countBudgetBtn = document.getElementsByTagName('button')[2], //Расчет дневного бюджета

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), //поля необязательных расходов

    choosIncome = document.querySelector('.choose-income'), //статьи возможного дохода 

    checkSavings = document.querySelector('#savings'), //Чекбокс

    chooseSum = document.querySelector('.choose-sum'), //Сумма

    choosPercent = document.querySelector('.choose-percent'), //Процент

    yearValue = document.querySelector('.year-value'), //Год

    montValue = document.querySelector('.month-value'), //Месяц

    dayValue = document.querySelector('.day-value'), //День
    time,
    money,
    commonExpensesItem = 0;

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

expensesItemBtn.style.backgroundImage = 'none';
optionalExpensesBtn.style.backgroundImage = 'none';
countBudgetBtn.style.backgroundImage = 'none';

startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц', '');

    while (isNaN(money) || money === '' || money === null) {
        money = +prompt('Ваш бюджет?', '');
    };
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    montValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    for (let i = 0; i < optionalExpensesItem.length; i++) {
        optionalExpensesItem[i].addEventListener('input', function() {
            for (let j = 0; j < optionalExpensesItem.length; j++) {
                if (optionalExpensesItem[i].value === '') {
                    optionalExpensesBtn.disabled = true;
                } else {
                    optionalExpensesBtn.disabled = false;
                    optionalExpensesBtn.style.backgroundImage = '';
                }
            }
        })
    };

    for (let i = 0; i < expensesItem.length; i++) {
        expensesItem[i].addEventListener('input', function() {
            if ((expensesItem[0].value !== '' && expensesItem[1].value !== '') ||
                (expensesItem[2].value !== '' && expensesItem[3].value !== '')) {
                expensesItemBtn.disabled = false;
                expensesItemBtn.style.backgroundImage = '';
                commonExpensesItem = +expensesItem[1].value + +expensesItem[3].value;
            } else {
                expensesItemBtn.disabled = true;
            }
        })
    };

    expensesItemBtn.addEventListener('click', function() {
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {

            let a = expensesItem[i].value,
                b = expensesItem[++i].value;

            if (a !== '' && b !== '') {
                appData.expenses[a] = b;
                sum += +b;
                countBudgetBtn.style.backgroundImage = '';
            }
        }
        expensesValue.textContent = sum;
        countBudgetBtn.disabled = false;
    });

    optionalExpensesBtn.addEventListener('click', function() {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    });

    countBudgetBtn.addEventListener('click', function() {
        if (appData.budget !== undefined) {

            appData.moneyPerDay = ((appData.budget - commonExpensesItem) / 30).toFixed();
            daybudgetValue.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) {
                levelValue.textContent = 'Минимальный уровень достатка';
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = 'Средний уровень достатка';
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = 'Высокий уровень достатка';
            } else {
                levelValue.textContent = 'Произошла ошибка';
            }
        } else {
            daybudgetValue.textContent = 'Произошла ошибка';
        }

    });

    choosIncome.addEventListener('input', function() {
        let items = choosIncome.value;
        appData.income = items.split(', ');
        incomValue.textContent = appData.income;
    });

    checkSavings.addEventListener('click', function() {
        if (appData.savings === true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    chooseSum.addEventListener('input', function() {
        if (appData.savings === true) {
            let sum = +chooseSum.value,
                percent = +choosPercent.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    choosPercent.addEventListener('input', function() {
        if (appData.savings === true) {
            let sum = +chooseSum.value,
                percent = +choosPercent.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};