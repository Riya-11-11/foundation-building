// Palindrome Check
// Check if a word/sentence is palindrome ignoring spaces and case.
// "Madam" → true, "Step on no pets" → true

let str = "Step on no pets";
let newStr = str.toLowerCase();
let len = newStr.length;
let result = "";

for (let i = len - 1; i >= 0; i--) {
  let word = newStr[i];
  result += word;
}

console.log(result);
