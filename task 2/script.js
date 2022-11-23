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

/*let i = 0;
while(i < 2) {
    const a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколь обойдется', '')
    appData.income[a] = b;
    i++;
}*/

/*let i = 0;
do {
    const a = prompt('Введите обязательную статью расходов в этом месяце', ''),
         b = prompt('Во сколь обойдется расходов ', '');
    appData.income[a] = b;
    i++;

} while (i < 2);*/

alert('Бюджет на 1 день: ' + Math.round(appData.budget / 30));