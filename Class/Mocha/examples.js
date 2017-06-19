function sortNumbers(arr) {
    arr.sort((a, b) => a - b);

};

let nums = [5, 12, 10, 1];
sortNumbers(nums);

if (JSON.stringify(nums) != '[1, 5, 10, 12]')
    console.error("test failed");