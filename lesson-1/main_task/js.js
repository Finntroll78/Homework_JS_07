let money = prompt('Ваш бюджет на месяц'),
	time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpense: {},
	income: [],
	savings: false
};


let mandatoryItem1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
	cost1 = prompt('Во сколько обойдется?'),
	mandatoryItem2 = prompt('Введите обязательную статью расходов в этом месяце'),
	cost2 = prompt('Во сколько обойдется?');

appData.expenses[mandatoryItem1] = cost1;
appData.expenses[mandatoryItem2] = cost2;

console.log(appData)

let budgetOfOneDay = appData.budget / 30;

alert(`Ваш бюджет на один день: ${budgetOfOneDay}`);