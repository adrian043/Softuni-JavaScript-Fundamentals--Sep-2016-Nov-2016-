function conReversed(input) {
    // let text = input.join('').split(' ').reverse();
    // console.log(text)

    let text = input.join('');
    let arr = Array.from(input);
    console.log(arr.reverse().join(''));
}
conReversed(['I', 'am', 'student']);