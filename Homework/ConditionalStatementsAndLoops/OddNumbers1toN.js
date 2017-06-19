function oddNumFrom1ToN(input) {
    let num = Number(input[0]);

    for (let i = 1; i <= num; i+=2) {
        console.log(i)
    }
}

oddNumFrom1ToN([5])