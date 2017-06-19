function Distance([v1, v2, t]) {
    v1 = Number(v1);
    v2 = Number(v2);
    t = Number(t);
    let s1 = v1/3600 * t * 1000
    let s2 = v2/3600 * t * 1000
    let diff = Math.abs(s1 - s2)
    console.log(diff)
}

Distance([5, -5, 40])