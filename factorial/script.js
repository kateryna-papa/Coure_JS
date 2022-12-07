const n = +prompt('Введіть ціле число', '');

function factorial(n) {
    if (typeof (n) !== 'number' || !Number.isInteger(n)) {
        return "ERROR";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}

console.log(factorial(n));
alert(`!${n} = ${factorial(n)}`);