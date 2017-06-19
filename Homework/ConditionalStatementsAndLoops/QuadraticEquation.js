function quadraticEquation([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let x1;
    let x2;
    let discriminant = (b*b) - 4*a*c;
    x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b + Math.sqrt(discriminant)) / (2 * a);

    if (discriminant < 0) {
        console.log('No')
    }
    else if (discriminant > 0) {
        console.log(x1)
        console.log(x2)
    }
    else if (discriminant == 0) {
        console.log(x1)
    }
}

quadraticEquation([1, -12, 36])