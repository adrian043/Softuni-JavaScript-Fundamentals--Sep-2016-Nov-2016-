function aggElements(input) {
    let elements = input.map(Number);
    agg(elements, 0, (a, b) => a + b);
    agg(elements, 0, (a, b) => a + 1 / b);
    agg(elements, '', (a, b) => a + b);

    function agg(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val)
    }
}

aggElements([1, 2, 3]);