// [2, 6, 4, 6, 8, 6, 1]
// Target: 6
// 👉 Print all indices where 6 appears.
// 👉 If not found at all, print "Element Not Present".

let arr = [2, 6, 4, 6, 8, 6, 1];
let target = 6;
let indexes = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    indexes.push(i);
  }
}
if (indexes.length === 0) {
  console.log("Element not found");
} else
  for (let i = 0; i < indexes.length; i++) {
    console.log(indexes[i]);
  }
