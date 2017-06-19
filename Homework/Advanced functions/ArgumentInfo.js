function result() {
        let firstArg = [];
        for (let i = 0; i < arguments.length; i++) {
            let obj = arguments[i];
            let type = typeof obj;
            console.log(type + ': ' + obj);
            if (!firstArg[type]) {
                firstArg[type] = 1;
            } else {
                firstArg[type]++;
            }
        }
        let sortedTypes = [];
        for (let currentType in firstArg) {
            sortedTypes.push([currentType, firstArg[currentType]]);
        }
        sortedTypes.sort(function(a,b) {
            return b[1] - a[1];
        });
        for (let currentType of sortedTypes) {
            console.log(currentType[0] + " = " + currentType[1]);
        }
}
result('cat', 42, function () { console.log('Hello world!'); });