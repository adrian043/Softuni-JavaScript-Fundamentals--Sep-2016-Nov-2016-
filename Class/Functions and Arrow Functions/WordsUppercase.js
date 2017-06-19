function uppercase([input]) {
    let upper = input.toUpperCase();
    let words = extraWords();
    words = words.filter(w => w != '');
    return words.join(', ');

    function extraWords() { return upper.split(/\W+/); }
}
uppercase(['Hi, how are you?'])