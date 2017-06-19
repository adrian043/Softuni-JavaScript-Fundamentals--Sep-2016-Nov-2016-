function CompoundInterest([P, i, n, t]) {
    [P, i, n, t] = [P, i, n, t].map(Number);
    i = i / 100;
    n = 12 / n;

    let compInterest = P*Math.pow(1 + (i / n), (n * t));
    console.log(compInterest.toFixed(2))
}

CompoundInterest([1500, 4.3, 3, 6])