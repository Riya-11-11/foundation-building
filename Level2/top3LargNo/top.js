let arr = [4, 7, 1, 9, 2, 5]
let first = -Infinity 
let sec = -Infinity
let third = -Infinity

for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
  if (num > first) {
    third = sec
    sec = first
    first = num
  }else if (num > sec) {
    third = sec
    sec = num
  } else third = num
}

console.log(first, sec, third);
