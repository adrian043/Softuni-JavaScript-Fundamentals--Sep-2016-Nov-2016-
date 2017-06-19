function modifyAvg([n]) {
    let output = [];
    let sNumber = n.toString();
    for (let i = 0, len = sNumber.length; i < len; i+=1) {
        output.push(+sNumber.charAt(i))
    }
    let sum = output.reduce(add, 0);

    function add(a, b) {
        return a + b;
    }
    let numsCount = n.toString().length;

    while (sum / numsCount <= 5) {
        sum += 9;
        numsCount ++;
        n += '9'
    }
    return n;
}
modifyAvg([101])