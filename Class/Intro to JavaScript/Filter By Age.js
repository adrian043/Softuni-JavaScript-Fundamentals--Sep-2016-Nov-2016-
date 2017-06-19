function filterByAge([minAge, nameA, ageA, nameB, ageB]) {
    [minAge, ageA, ageB] = [minAge, ageA, ageB].map(Number);
    let objA = {
        name: {nameA},
        age: {ageA}
    };
    let objB = {
        name: {nameB},
        age: {ageB}
    };
    console.log(objA.age)
}

filterByAge(['12', 'Ivan', '15', 'Asen', '9'])