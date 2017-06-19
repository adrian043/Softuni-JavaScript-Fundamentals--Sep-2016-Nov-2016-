function calculate([num1, num2, operation]) {
    [num1, num2] = [num1, num2].map(Number);
    
    let calc = function(num1, num2, operation) { return operation(num1, num2) };

    let sum = function(num1, num2) { return num1 + num2; };
    let sub = function(num1, num2) { return num1 - num2; };
    let multi = function(num1, num2) { return num1 * num2; };
    let div = function(num1, num2) { return num1 / num2; };

    switch (operation) {
        case '+': return calc(num1, num2, sum);
        case '-': return calc(num1, num2, sub);
        case '*': return calc(num1, num2, multi);
        case '/': return calc(num1, num2, div);
    }
}
console.log(calculate(['2', '4', '-']))

