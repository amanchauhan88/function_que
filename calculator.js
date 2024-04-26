function simpleCalculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Division by zero!";
            }
        default:
            return "Invalid operator";
    }
}

console.log("5 + 3 =", simpleCalculator(5, '+', 3));
console.log("10 - 4 =", simpleCalculator(10, '-', 4));
console.log("6 * 2 =", simpleCalculator(6, '*', 2));
console.log("20 / 5 =", simpleCalculator(20, '/', 5));
console.log("100 / 0 =", simpleCalculator(100, '/', 0));
console.log("2 ^ 3 =", simpleCalculator(2, '^', 3)); 
