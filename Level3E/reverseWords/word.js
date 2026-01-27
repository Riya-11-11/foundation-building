// Reverse Words in a Sentence
// "I love coding" → "coding love I"
// Think: split → reverse → join (conceptually).

let sentence = "I love coding";
let spllitedSen = sentence.split(" ");
let len = spllitedSen.length;
let reverseStr = "";

for (let i = len - 1; i >= 0; i--) {
  let word = spllitedSen[i];
  reverseStr += word;

  if (i !== 0) {
    reverseStr += " ";
  }
}

console.log(reverseStr);
