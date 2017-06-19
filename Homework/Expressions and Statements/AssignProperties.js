function AP([firstInput, firstParam, secondInput, secondParam, thirdInput, thirdParam]) {
    let data = {
        [firstInput]: firstParam,
        [secondInput]: secondParam,
        [thirdInput]: thirdParam
    };
    console.log(data);
}

AP(['ssid', '90127461', 'status', 'admin', 'expires', '600'])