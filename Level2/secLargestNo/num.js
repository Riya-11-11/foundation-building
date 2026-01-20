let arr = [10, 5, 20, 8, 3]
let secLarg = 0
for (let i = 0; i < arr.length; i++) {
  let largest = arr[0]
  if (arr[i+1] > largest) {
    secLarg = largest
    largest = arr[i+1]
  }else continue
}

console.log(secLarg);





