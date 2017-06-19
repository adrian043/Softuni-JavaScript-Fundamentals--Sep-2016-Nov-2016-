function procOddNumz(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 != 0){
            result.push(input[i]);
        }
    }
    console.log(result.map(x => x * 2).reverse().join(' '));

}

procOddNumz(['3', '0', '10', '4', '7', '3']);