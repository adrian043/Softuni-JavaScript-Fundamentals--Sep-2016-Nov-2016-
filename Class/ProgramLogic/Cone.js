function cone([r, h]) {
    [r, h] = [r, h].map(Number);
    let volume = Math.PI*r*r*h/3;
    let s = Math.sqrt((h*h)+(r*r));
    let area = Math.PI * r * (r + s);

    console.log(volume.toFixed(4));
    console.log(area.toFixed(4));
}

cone([3, 5])