// [1,2,3,4] → [4,1,2,3]

//...printing...[4,3,2,1]

// for (let i = arr1.length-1; i >=0; i--) {
//     let elem = arr1[i];
//     arr2.push(elem) 
// }  

let arr1 = [1,2,3,4]
let arr2 = []
let last = arr1[arr1.length-1] 

for (let i = 0; i < arr1.length-1; i++) {
    let elem = arr1[i];
    arr2[i+1] = elem
}
arr2[0] = last
console.log(arr2);




