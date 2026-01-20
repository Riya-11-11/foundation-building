let series = [0, 1]

for (let i = 0; i < n-2; i++) {
    let first = series[i]
    let sec = series[i+1]
    let next = first + sec
    series.push(next) 
    sec = first
    next = sec
}

console.log(series);


