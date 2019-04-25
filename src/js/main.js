let startBtn = document.getElementById('start'),
    budgetValue = document.getElementById('budget-value'),
    daybudgetValue = document.getElementById('daybudget-value'),
    levelValue = document.getElementById('level-value'),
    expensesValue = document.getElementById('expenses-value'),
    optionalExpensesValue = document.getElementById('optionalexpenses-value'),
    incomValue = document.getElementById('income-value'),
    monthsavingsValue = document.getElementById('monthsavings-value'),
    yearsavingsValue = document.getElementById('yearsavings-value'),

    //обязательные расходы:
    expenseItem = document.getElementsByClassName('expenses-item'),

    //кнопки:
    optionalexpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countBudgetBtn = document.querySelector('.count-budget-btn'),

    //поля необязательных расходов:
    optionalexpenseItem = document.querySelectorAll('optionalexpenses-item'),

    //статьи возможного дохода:
    choosIncome = document.querySelector('.choose-income'),

    //Чекбокс:
    savings = document.querySelector('.savings'),

    //Сумма:
    chooseSum = document.querySelector('.sum'),

    //Процент:
    choosPercent = document.querySelector('.percent'),

    //Год:
    yearValue = document.querySelector('.year-value'),

    //Месяц:
    montValue = document.querySelector('.month-value'),

    //День:
    dayValue = document.querySelector('.day-value');

    console.log(startBtn);
    console.log(budgetValue);
    console.log(daybudgetValue);
    console.log(levelValue);
    console.log(expensesValue);
    console.log(optionalExpensesValue);
    console.log(incomValue);
    console.log(monthsavingsValue);
    console.log(yearsavingsValue);
    console.log(expenseItem);
    console.log(optionalexpensesBtn);
    console.log(countBudgetBtn);
    console.log(optionalexpenseItem);
    console.log(choosIncome);
    console.log(savings);
    console.log(chooseSum);
    console.log(choosPercent);
    console.log(yearValue);
    console.log(montValue);
    console.log(dayValue);