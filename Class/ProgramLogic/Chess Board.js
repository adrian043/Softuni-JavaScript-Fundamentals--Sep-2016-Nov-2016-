function chessboard([n]) {
    let html = ('<div class="chessboard">\n');
    // let color = 'black';
    for (let row = 1; row <= n; row++) {
        html += "\t<div>\n";
        let color = (row % 2 == 0) ? "white" : "black";
        for (let col = 1; col <=n; col++) {
            html += `\t\t<span class="${color}"></span>\n`;
            color = (color == "white") ? "black" : "white"
        }
        // if (n % 2 == 0) {
        //     color = (color == "white") ? "black" : "white"
        // }
        html += "\t</div>\n";
    }
    html += "</div>\n";
    console.log(html)
}
