function printLetters(input) {
    if (Array.isArray(input))
            input = input[0];
    for (let i in input)
        console.log(`input[${i}] -> ${input[i]}`)
}
printLetters(['Hello, World!']);