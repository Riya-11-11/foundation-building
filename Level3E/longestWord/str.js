// Longest Word in a Sentence
// "I love learning Javascript daily" → "Javascript"
// You know this one; do it without looking at previous code.

let sentence = "I love learning Javascript daily";
let spllitedStr = sentence.split(" ");
let len = spllitedStr.length;
let longestWord = spllitedStr[0];

for (let i = 0; i < len; i++) {
  let currentWord = spllitedStr[i];
  if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }
}
console.log(longestWord);
