// Count Vowels and Consonants
// Input: "Programming is fun" → vowels: 5, consonants: 11
// Track counts in a single loop.

let line = "Programming is fun";
let newLine = line.toLowerCase()
let vowels = 0;
let consonants = 0;
for (const ch of newLine) {
  if (ch >= "a" && ch <= "z") {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      vowels += 1;
    } else {
      consonants += 1;
    }
  }else continue
}

console.log("Vowels:", vowels, "Consonants:", consonants);
