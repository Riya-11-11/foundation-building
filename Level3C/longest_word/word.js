// "I love learning JavaScript daily"
// → "JavaScript"

let sentence = "I love learning Javascript daily"
let splitWord= sentence.split(" ");  //converting into array
let longestWord = splitWord[0]

for (let i = 1; i < splitWord.length; i++) {
    if (splitWord[i].length > longestWord.length) {
        longestWord = splitWord[i]
    }

}

console.log(longestWord);

