function GradsToDegrees([num]) {
    num = Number(num)

    // let deg = num * 0.9
    // while (deg > 360) {
    //     deg = deg - 360
    // }
    // if (deg < 0) {
    //     deg = deg + 360
    // }
    // else if (deg == 360) {
    //     deg = 0
    // }
    // console.log(Math.abs(deg))
    num = num % 400;
    num += 400;
    num = num % 400;
    let deg = num * 0.9;
    console.log(deg);
}

GradsToDegrees([-50])