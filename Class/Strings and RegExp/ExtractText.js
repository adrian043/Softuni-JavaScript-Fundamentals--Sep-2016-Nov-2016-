function extractText(input) {
    if (Array.from(input)) input = input[0];
    let result = [];
    let rightPar = -1;
    while (true) {
        let leftPar = input.indexOf('(', rightPar+1);
            if (leftPar == -1)
                break;
        rightPar = input.indexOf(')', leftPar+1);
            if (rightPar == -1)
                break;
        let textInPars = input.substring(leftPar+1, rightPar);
        result.push(textInPars);
    }
    console.log(result.join(', '));
}

extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);
