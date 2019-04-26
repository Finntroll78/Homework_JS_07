let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money === '' || money === null) {
        money = +prompt('Ваш бюджет на месяц', '');
    }
};

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpense: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');

            if (a !== null && b !== null && a !== '' && b !== '' &&
                a.length < 50 && b.length < 50 && !isNaN(b) && isNaN(a)) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings === true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
            while (isNaN(save) || isNaN(percent)) {
                save = +prompt('Какова сумма накоплений?', '');
                percent = +prompt('Под какой процент?', '');
            };
            appData.monthIncome = save / 100 / 12 * percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`)
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let a = prompt('Статья необязательных расходов?', '');
            if (a !== null && a !== '' && a.length < 50 && !isNaN(a)) {
                appData.optionalExpense[i] = a;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while (items === '' || items === null || !isNaN(items)) {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
        appData.income = items.split(',');

        let additionalQuestion = prompt('Может что-то еще?', '');
        if (additionalQuestion !== null && additionalQuestion !== '' && isNaN(additionalQuestion)) {
            appData.income.push(additionalQuestion)
        } else {
            alert('Вы ничего не ввели');
        }

        appData.income.sort();

        appData.income.forEach(function(item, i) {
            console.log(`${i+1} ${item}`)
        })
    }
};

console.log(appData)

console.log('Наша программа включает в себя данные:')
for (key in appData) {
    console.log(key);
}