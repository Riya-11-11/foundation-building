// Input: n = 7
// Output: 0 1 1 2 3 5 8

let n = 7;
let series = [0, 1];

for (let i = 0; i < n - 2; i++) {
  let first = series[i];
  let second = series[i + 1];
  let result = first + second;
  series.push(result);
}

console.log(series);
