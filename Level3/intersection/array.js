// [1,2,3,4] & [2,4,6] → [2,4]

let arr1 = [1,2,3,4]
let arr2 = [2,4,6]
let newArr = []

for (let i = 0; i < arr1.length; i++) {
    let elem1 = arr1[i]
    for (let j = 0; j < arr2.length; j++) {
        let elem2 = arr2[j]   
         if (elem1 == elem2) {//we  are comparing values
            newArr.push(elem2)
         } 
    }
   
    
}
console.log(newArr);
