// Most Frequent Character
// "aaabbcddd" → "d" appears 3 times
// Track counts efficiently (nested loop vs object).

let str = "aaabbcddd";
let freq = {};
let maxCount = 0;
let maxChar = " ";

for (let i = 0; i < str.length; i++) {
  let elem = str[i];
  if (freq[elem]) {
    freq[elem] += 1;
  } else {
    freq[elem] = 1;
  }

  if (freq[elem] >= maxCount) {
    maxCount = freq[elem];
    maxChar = elem;
  }
}
console.log(maxCount);
console.log(maxChar);
