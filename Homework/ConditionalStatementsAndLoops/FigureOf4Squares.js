function squaresFigure([n]) {
    let plus = '+';
    let dash = '-'.repeat(n-2);
    let space = ' '.repeat(n-2);

    if (n == 3) {
        for (let i = 1; i <= n; i++) {
            console.log(plus+dash+plus+dash+plus);
        }
    }

    else if (n < 5) {
        for (let i = 1; i <= n-1; i++) {
        console.log(plus+dash+plus+dash+plus);
        }
    }
    else {
        console.log(plus+dash+plus+dash+plus);

        if (n % 2 == 0) {
            for (let i = 1; i <= n / 2 - 2; i++) {
                console.log('|'+space+'|'+space+'|')
            }
            console.log(plus+dash+plus+dash+plus);
            for (let i = 1; i <= n / 2 - 2; i++) {
                console.log('|'+space+'|'+space+'|')
            }
        }
        else {
            for (let i = 1; i <= n / 2 - 1; i++) {
                console.log('|'+space+'|'+space+'|')
            }
            console.log(plus+dash+plus+dash+plus);
            for (let i = 1; i <= n / 2 - 1; i++) {
                console.log('|'+space+'|'+space+'|')
            }
        }
        console.log(plus+dash+plus+dash+plus);
    }
}

squaresFigure([3])