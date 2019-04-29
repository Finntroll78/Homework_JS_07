let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'), //доход
    daybudgetValue = document.querySelector('.daybudget-value'), //Бюджет на 1 день
    levelValue = document.querySelector('.level-value'), //Уровень дохода
    expensesValue = document.querySelector('.expenses-value'), //Обязательные расходы
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'), //Возможные траты
    incomValue = document.querySelector('.income-value'), //Дополнительный доход
    monthsavingsValue = document.querySelector('.monthsavings-value'), //Накопления за 1 месяц
    yearsavingsValue = document.querySelector('.yearsavings-value'), //Накопления за 1 год

    expensesItem = document.querySelectorAll('.expenses-item'), //обязательные расходы

    //кнопки:
    expensesItemBtn = document.querySelector('.expenses-item-btn'), //утвердить обязательные расходы
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'), //утвердить необязательные расходы
    countBudgetBtn = document.querySelector('.count-budget-btn'), //Расчет дневного бюджета
    

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), //поля необязательных расходов

    choosIncome = document.querySelector('.choose-income'), //статьи возможного дохода 

    checkSavings = document.querySelector('#savings'), //Чекбокс

    chooseSum = document.querySelector('.choose-sum'), //Сумма

    choosPercent = document.querySelector('.choose-percent'), //Процент

    yearValue = document.querySelector('.year-value'), //Год

    montValue = document.querySelector('.month-value'), //Месяц

    dayValue = document.querySelector('.day-value'); //День

    console.log(startBtn)
    console.log(budgetValue)
    console.log(daybudgetValue)
    console.log(levelValue)
    console.log(expensesValue)
    console.log(optionalExpensesValue)
    console.log(incomValue)
    console.log(incomValue)
    console.log(monthsavingsValue)
    console.log(yearsavingsValue)
    console.log(expensesItem)
    console.log(optionalExpensesBtn)
    console.log(countBudgetBtn)
    console.log(optionalExpensesItem)
    console.log(choosIncome)
    console.log(savings)
    console.log(chooseSum)
    console.log(choosPercent)
    console.log(yearValue)
    console.log(montValue)
    console.log(dayValue)

