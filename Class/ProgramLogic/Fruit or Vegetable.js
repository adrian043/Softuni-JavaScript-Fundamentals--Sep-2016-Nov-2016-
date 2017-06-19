function fruitOrVegetable([input]) {
    switch (input) {
        case 'banana':
            input = console.log('fruit'); break;
        case 'apple':
            input = console.log('fruit'); break;
        case 'kiwi':
            input = console.log('fruit'); break;
        case 'cherry':
            input = console.log('fruit'); break;
        case 'lemon':
            input = console.log('fruit'); break;
        case 'grapes':
            input = console.log('fruit'); break;
        case 'peach':
            input = console.log('fruit'); break;
        case 'tomato':
            input = console.log('vegetable'); break;
        case 'cucumber':
            input = console.log('vegetable'); break;
        case 'pepper':
            input = console.log('vegetable'); break;
        case 'onion':
            input = console.log('vegetable'); break;
        case 'garlic':
            input = console.log('vegetable'); break;
        case 'parsley':
            input = console.log('vegetable'); break;
        default: console.log('unknown')
    }
}

fruitOrVegetable(['apple'])