function xml(input) {
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n';
    html += '<quiz>\n';
    
        for (let i = 0; i < input.length; i+=2) {
            let q = input[i];
            let a = input[i + 1];

            html += `  <question>\n`;
            html += `    ${q}\n`;
            html += `  </question>\n`;

            html += `  <answer>\n`;
            html += `    ${a}\n`;
            html += `  </answer>\n`;
        }
    html += `</quiz>`;
    console.log(html);
}
xml(['Dry ice is a frozen form of which gas?', 'Carbon Dioxide', "What is the brightest star in the night sky?",
    "Sirius"]);