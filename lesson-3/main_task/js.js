let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money === null) {
        money = +prompt('Ваш бюджет на месяц', '');
    }
};

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpense: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');

        if (a !== null && b !== null && a !== '' && b !== '' &&
            a.length < 50 && b.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
};

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
};

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
};

detectLevel();

function checkSavings() {
    if (appData.savings === true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');

        appData.monthIncome = save / 100 / 12 * percent;
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`)
    }
};

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt('Статья необязательных расходов?', '');
        if (a !== null && a !== '' && a.length < 50) {
            appData.optionalExpense[i] = a;
        } else {
            i--;
        }
    }
};

chooseOptExpenses();