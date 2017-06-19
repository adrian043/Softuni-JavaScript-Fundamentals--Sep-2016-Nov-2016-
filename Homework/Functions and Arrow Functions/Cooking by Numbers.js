function cooking(input) {
    let num = Number(input[0]);
    let op;
    for (let i = 1; i <= input.length-1; i++){
        op = input[i];
    }
    let calc = function (num, op) { return op };

    let chop = function (num) { return num / 2 };
    let dice = function (num) { return Math.sqrt(num) };
    let spice = function (num) { return num + 1 };
    let bake = function (num) { return num / 3 };
    let fillet = function (num) { return num *= 0.2 };

    switch (op) {
        case 'chop': return calc(num, op);
        case 'dice': return calc(num, op);
        case 'spice': return calc(num, op);
        case 'bake': return calc(num, op);
        case 'fillet': return calc(num, op);
    }
}
console.log(([32,'chop', 'chop', 'chop', 'chop', 'chop']));