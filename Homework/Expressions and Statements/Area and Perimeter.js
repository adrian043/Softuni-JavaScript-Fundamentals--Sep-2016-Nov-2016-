function AaP([a, b]) {
    [a, b] = [a, b].map(Number)
    let perimeter = a * b;
    let area = 2 * (a + b);
    console.log(perimeter);
    console.log(area);
}

AaP([3, 5])