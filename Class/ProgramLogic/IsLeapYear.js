function IstYearLeap(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        console.log('yes')
    }
    else {
        console.log('no')
    }
}

IstYearLeap(['1904'])

