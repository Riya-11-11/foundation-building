let arr = [2, 5, 6, 7, 8];
let prime = []

for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (num > 1) {
        isPrimeNum = true
        for (let j = 2; j < num; j++) {
            if (num%j == 0) {
                isPrimeNum = false  
                break
            } 
        }

        if (isPrimeNum) {
            prime.push(num)
        }
        
    }
}

console.log(prime);
