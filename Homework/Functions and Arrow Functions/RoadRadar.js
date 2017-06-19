// function getInfraction(input) {
//     speed = Number(input[0]);
//     limit = Number(input[1]);
//
//     let overSpeed = speed - limit;
//
//     if (overSpeed <= 0) {
//         return false;
//     }
//     else if (overSpeed >= 1 || speed <= 29) {
//         return 'speeding';
//     }
//     else if (overSpeed >= 20 || overSpeed <= 40) {
//         return 'excessive speeding';
//     }
//     else if (overSpeed >= 41) {
//         return 'reckless driving';
//     }
//     function getLimit(zone) {
//         switch (zone) {
//             case 'motorway': return 130;
//             case 'interstate': return 90;
//             case 'city': return 50;
//             case 'residential': return 20;
//         }
//         let limit = getLimit(zone);
//         let infraction = getInfraction(speed, limit);
//         if (infraction) {
//             console.log(infraction);
//         }
//     }
// }
//
// getInfraction([120, 'interstate']);

function solve([currentSpeed, area]) {
    let speed = Number(currentSpeed);
    let zone = String(area);

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;

        if  (overSpeed <= 0){
            return false;
        } else if (overSpeed <= 20) {
            console.log('speeding')
        } else if (overSpeed <= 40) {
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        }
    }

    function getLimit(zone) {
        switch(zone) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    let limit = getLimit(zone);
    let infraction = getInfraction(speed, limit);
}

solve([120, 'interstate']);