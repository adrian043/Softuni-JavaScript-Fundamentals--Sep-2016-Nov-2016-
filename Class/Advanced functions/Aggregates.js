function calcAgg(input) {
    function reduce(input, func) {
        let result = input[0];
        for (let nextElem of input.slice(1)) {
            result = func(result, nextElem);
        }
        return result;
    }
    console.log("Sum = " + reduce(input, (x,y) => Number(x) + Number(y)));
    console.log("Min = " + reduce(input, (x,y) => Math.min(x,y)));
    console.log("Max = " + reduce(input, (x,y) => Math.max(x,y)));
    console.log("Product = " + reduce(input, (x,y) => Number(x) * Number(y)));
    console.log("Join = " + reduce(input, (x,y) => '' + x + y));
}

calcAgg(['2', '3', '10', '5']);


