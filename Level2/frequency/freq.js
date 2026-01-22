// let elem = [1, 2, 2, 3, 1, 1]
// let copy = elem.copy
// console.log(copy);

// let freq = 0


// for (let i = 0; i < elem.length; i++) {
//     if (elem[i]==elem[i+1]) {
//         freq++
//     }

    
// }




//     // for (let j = 0; j < elem.length; j++) {
//     //     let num1 = all[j]
//     //     let num2 = all[j+1]
//     //     // console.log(num1, num2);

//     //     if (num1 == num2) {
//     //     console.log(all[j], freq++);
        
//     // }
//     // }

     
    
// // console.log(all);

// // console.log(freq);

// let elem = [1, 2, 2, 3, 1, 1]
// let freq = {}

// for (let i = 0; i < elem.length; i++) {
//     let current = i
//     newarr += elem[i]
//     if (current == newarr[i]) {
//         freq += 1
//     } else newarr.push(current)
//     console.log(newarr, freq);
    
// }

let elem = [1, 2, 2, 3, 1, 1]
let freq = {}
for (let i = 0; i < elem.length; i++) {
    let num = elem[i]//current number
    if (freq[num]) {
        freq[num] += 1//increment count       
    } else {
        freq[num] = 1//first occurrence
    }  
}
console.log(freq);


