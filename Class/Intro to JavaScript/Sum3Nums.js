function sum3Numbers(num) {
    // [num1, num2, num3] = [num1, num2, num3].map(Number);
    let num1 = Number(num[0]);
    let num2 = Number(num[1]);
    let num3 = Number(num[2]);
    let sum = num1 + num2 + num3;
    console.log(sum);
}
sum3Numbers(['6', '7', '9']);