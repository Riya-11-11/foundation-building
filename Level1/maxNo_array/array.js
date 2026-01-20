let arr = [3, 7, 2, 9, 4];

let max = arr[0]

for (let i = 0; i < arr.length; i++) {
    let temp = arr[i+1]
    if(temp > max){
        max = temp
    }
}
console.log(max) 