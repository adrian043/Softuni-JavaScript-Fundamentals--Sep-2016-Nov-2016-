function palindrome([input]) {
    let str = input;
    let reversed = str.split('').reverse().join("");
    if (str == reversed) console.log('true');
    else console.log('false')
}

palindrome(['racecar']);