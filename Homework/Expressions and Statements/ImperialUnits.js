function imperialUnits([num]) {
    num = Number(num)
    let whole = num / 12;
    let residue = num % 12;

    console.log(`${parseInt(whole)}'-${residue}"`)
}

imperialUnits([55])