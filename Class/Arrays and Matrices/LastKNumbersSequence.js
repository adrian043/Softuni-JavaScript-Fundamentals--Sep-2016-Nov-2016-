function lastKNumSeq([n, k]) {
    [n, k] = [n, k].map(Number);
    let arr = [];
    arr[0] = 1;

    for(let currIdx = 1; currIdx < n; currIdx++) {
        let sum = 0;
        let start = Math.max(0, currIdx - k);
        let end = currIdx - 1;

        for (let i = start; i <= end; i++) {
            sum += arr[i];
        }
        arr[currIdx] = sum;
    }
    return arr;
}

let a = lastKNumSeq(['6', '3']);
let message = arraysEqual([1, 1, 2, 4, 7, 13], a) ? "They are equal" : "Not ready yet.";
console.log(message);
console.log(a.join(' '));

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}