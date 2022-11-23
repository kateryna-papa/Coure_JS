let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    appData.expenses[a] = b;
}

function detectDayBudget(budget) {
    alert('Бюджет на 1 день: ' + Math.round(budget / 30));
}

// detectDayBudget(appData.budget);

function detectLevel(budget) {
    if (budget <= 10000) {
        alert('low level');
    } else if (budget > 10000 && budget <= 20000) {
        alert('average level');
    } else {
        alert('high level');
    }
}

// detectLevel(appData.budget);

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        const a = prompt('Статья необязательных расходов?', '');
        appData.optionalExpenses[i + 1] = a;
    }
}

//chooseOptExpenses();

console.log(appData);