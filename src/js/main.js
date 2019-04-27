let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),//доход
    daybudgetValue = document.getElementsByClassName('daybudget-value'),//Бюджет на 1 день
    levelValue = document.getElementsByClassName('level-value'),//Уровень дохода
    expensesValue = document.getElementsByClassName('expenses-value'),//Обязательные расходы
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),//Возможные траты
    incomValue = document.getElementsByClassName('income-value'),//Дополнительный доход
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),//Накопления за 1 месяц
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),//Накопления за 1 год

    //обязательные расходы:
    expenseItem = document.querySelectorAll('.expenses-item'),

    //кнопки:
    expensesItemBtn = document.getElementsByTagName('expenses-item-btn'),//утвердить обязательные расходы
    optionalExpensesBtn = document.getElementsByTagName('optionalexpenses-btn'),//утвердить необязательные расходы
    countBudgetBtn = document.getElementsByTagName('count-budget-btn'),//Расчет дневного бюджета

    //поля необязательных расходов:
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    //статьи возможного дохода:
    choosIncome = document.getElementById('income'),//статьи возможного дохода 

    //Чекбокс:
    savings = document.getElementById('savings'),//накопления

    //Сумма:
    chooseSum = document.getElementById('sum'),//сумма

    //Процент:
    choosPercent = document.getElementById('percent'),//процент

    //Год:
    yearValue = document.querySelector('.year-value'),

    //Месяц:
    montValue = document.querySelector('.month-value'),

    //День:
    dayValue = document.querySelector('.day-value');

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
    console.log(expenseItem)
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

