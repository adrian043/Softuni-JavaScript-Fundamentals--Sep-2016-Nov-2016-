function nextDay([year, month, day]) {
    [year, month, day] = [year, month, day].map(Number);
    // let today = new Date(year, month - 1, day+1);
    let nextDay = new Date(year, month, day+2);
    console.log(nextDay.getFullYear() + '-' + nextDay.getMonth() + '-' + nextDay.getDate())
}
nextDay(['2016', '9', '30']);