// Array [1,3,2,5,7,2], target 9 → all unique pairs
// Challenge: no repeated pairs like (3,6) and (6,3).

let arr = [1,3,2,5,7,2]
let target = 8
let pairs = []

for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    for (let j = i+1; j < arr.length; j++) {
        let elem = arr[j]
        if (num+elem == target) {
            pairs.push([num, elem])
        }
        
    }
    
}
console.log(pairs);
