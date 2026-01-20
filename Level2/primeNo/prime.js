let num = 5
isPrimeNo = false

if (num>1) {
    for (let i = 2; i < num; i++) {
    if (num%i == 0) {
        break
    }else isPrimeNo = true  
}
} 

console.log(isPrimeNo);

