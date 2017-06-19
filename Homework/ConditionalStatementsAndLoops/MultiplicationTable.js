function multiplicationTable(n) {
    n = Number(n);
    let firstRow = [];
    let html = ('<table border="1">\n');
        firstRow = [' <tr><th>x</th>'];
        for (let i = 1; i <= n; i++) {
            firstRow.push(`<th>${i}</th>`);
        }
        firstRow.push('</tr>\n');
        console.log(firstRow.join(""))
        for (let row = 1; row <= n;) {
            html += (` <tr>`);
            html += (`<th>${row++}</th>`);
            html += ('<td></td>').repeat(n);
            html += ('</tr>\n');
        }

    html += '</table>\n';
    console.log(html)
}
multiplicationTable(5);